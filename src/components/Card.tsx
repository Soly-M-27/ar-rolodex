import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
type Props = {
  NameBusiness: string;
  Location: string;
  Link_Tree_Link: string;
  phone_number: string;
  social_links?: { key: "facebook" | "instagram" | "twitter" | "github", value: string }[];
}

type LinkProps = {
  href: string;
  children?: React.ReactNode;
}

export type SocialProps = {
  href: string;
  social_key: "facebook" | "instagram" | "twitter" | "github";
}
const Link = ({ href, children }: LinkProps) => {
  return (
    <a href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
      {children}
      <span className="ml-2">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </a>
  )
}

//TODO: make the document in firebase fit this 
/*
export const SocialLink = ({ href,  social_key}: SocialProps) => {
  const socials = {
    "facebook": <a href={href}><FontAwesomeIcon icon={["fab", "facebook"]} /></a>,
    "instagram":<a href={href}> <FontAwesomeIcon icon={["fab", "instagram"]} /></a>,
    "twitter":<a href={href}> <FontAwesomeIcon icon={["fab", "twitter"]} /></a>,
    "github":<a href={href}> <FontAwesomeIcon icon={["fab", "github"]} /></a>,
  }
  const social = socials[social_key];
  return social;
}
*/

export default function Card({ NameBusiness, Location, Link_Tree_Link, phone_number, social_links }: Props) {
  console.log(social_links)

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
      <a href="#" className="flex mt-6 justify-center">
        <img className="rounded-t-lg" src="https://source.unsplash.com/3tYZjGSBwbk" width={300} alt="" />
      </a>

      <div className="p-5">
        <a href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business: {NameBusiness}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {Location}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone Number: {phone_number}</p>
        <div className="flex justify-center">
          <Link href={Link_Tree_Link} >
            Visit my LinkTree
          </Link>
        </div>
        {/*
        {social_links.map((social) => {
          return (
            <SocialLink social_key={social.key} href={social.value}  />
          )})
        }
        */}

      </div>
    </div>
  )
}   
