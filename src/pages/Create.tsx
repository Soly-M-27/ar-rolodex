import { useState } from "react";
import { Input, DropDown } from "../components";
import { setDoc, doc, query, collection, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, projectAuth } from "../firebase/config";
import {  getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";


type Props = {}

export const socials = ["Github", "LinkedIn", "Facebook", "Instagram", "Twitter"] as const;

export type Socials = typeof socials;

export function Create({ }: Props) {
  const [user, ..._] = useAuthState(projectAuth);
  const [dropDown, setDropDown] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [BusinessCardsDocs, ...__] = useCollection(
    query(
      collection(getFirestore(app), "BusinessCards"),
      where("uid", "==", user?.uid || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );



  //Form State
  const [name, setName] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [businessEmail, setBusinessEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [linkTree, setLinkTree] = useState<string>("");
  type SocialsData = {
    social: string;
    url: string;
  }
  const [socialsValues, setSocials] = useState<SocialsData[]>([]);

  const HandleSubmit = async () => {
    const FormData = {
      name,
      businessName,
      location,
      businessEmail,
      phoneNumber,
      linkTree,
      socialsValues
    }
    if (!user) {
      return;

    }









    const db = getFirestore(app)
    const docRef = doc(db, "BusinessCards", user.uid);
    const BusinessCardData = BusinessCardsDocs?.docs.map((doc) => doc.data());
    if (!BusinessCardData || BusinessCardData?.length === 0) {
      await setDoc(docRef, {"cards":[FormData], uid: user.uid});
      return;
    }
    console.log("BusinessCardData: ", BusinessCardData);
    const cards = BusinessCardData.map(data=>data.cards)[0]
    console.log("cards: ", cards);

    await setDoc(docRef, {"cards":[...cards, FormData], uid: user.uid});
  }
  return (
    <div className="mt-20">
      <div className="max-w-sm mx-auto" onSubmit={HandleSubmit} >
        <Input label="Name" type="text" id="Name" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
        <Input label="Business Name" type="text" id="Business name" placeholder="Business Name" onChange={(e) => setBusinessName(e.target.value)} />
        <Input label="Location" type="text" id="Location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
        <Input label="Business Email" type="email" id="Business Email" placeholder="Business Email" onChange={(e) => setBusinessEmail(e.target.value)} />
        <Input label="Phone Number" type="tel" id="Phone Numebr" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
        <Input label="Link Tree" type="url" id="Link Tree" placeholder="Link Tree" onChange={(e) => setLinkTree(e.target.value)} />
        <DropDown dropDown={dropDown} setDropDown={setDropDown} values={socials} setSelectedValues={setSelectedValues} />
        {selectedValues.map((value) => (
          <Input
            key={value}
            label={value}
            type="url"
            id={value}
            placeholder={value}
            onChange={
              (e) => setSocials((prev) => {
                if (prev.some((social) => social.social === value)) {
                  return prev.map((social) => {
                    if (social.social === value) {
                      return { social: value, url: e.target.value };
                    }
                    return social;
                  });
                }
                return [...prev, { social: value, url: e.target.value }];
              })}
          />
        ))}
        <button onClick={() => HandleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>
    </div>
  )
}
