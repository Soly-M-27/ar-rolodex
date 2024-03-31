import { useState } from "react";
import { Input, DropDown } from "../components";

type Props = {}

export function Create({ }: Props) {
  const [dropDown, setDropDown] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <div className="mt-20">
      <form className="max-w-sm mx-auto">
        <Input label="Name" type="text" id="Name" placeholder="Name" />
        <Input label="Business Name" type="text" id="Business name" placeholder="Business Name" />
        <Input label="Business Email" type="email" id="Business Email" placeholder="Business Email" />
        <Input label="Phone Number" type="tel" id="Phone Numebr" placeholder="Phone Number" />
        <Input label="Link Tree" type="url" id="Link Tree" placeholder="Link Tree" />
        <DropDown dropDown={dropDown} setDropDown={setDropDown} values={["Github", "LinkedIn", "Facebook", "Instagram"]} setSelectedValues={setSelectedValues} />
        {selectedValues.map((value) => (
          <Input key={value} label={value} type="url" id={value} placeholder={value} />
        ))}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}
