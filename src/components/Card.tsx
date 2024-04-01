import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
type Props = {
  NameBusiness: string;
  Location: string;
  Link_Tree_Link: string;
  phone_number: string;
  social_links?: { social: "Facebook" | "Instagram" | "Twitter" | "Github", url: string }[];
  mindURL: string;
}

type LinkProps = {
  href: string;
  children?: React.ReactNode;
}

export type SocialProps = {
  href: string;
  social_key: "Facebook" | "Instagram" | "Twitter" | "Github";
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
export const SocialLink = ({ href,  social_key}: SocialProps) => {
  const socials = {
    "Facebook":  <FontAwesomeIcon icon={faFacebook} />,
    "Instagram": <FontAwesomeIcon icon={faInstagram} />,
    "Twitter":   <FontAwesomeIcon icon={faTwitter} />,
    "Github":    <FontAwesomeIcon icon={faGithub} />,
    "LinkedIn":  <FontAwesomeIcon icon={faLinkedin} />,
  }
  const social = socials[social_key];
  if (!social) {
    return 
  }
  return <a className="text-3xl" href={href}>{social}</a>;
}

export default function Card({ NameBusiness, Location, Link_Tree_Link, phone_number, social_links, mindURL }: Props) {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
      <a href="#" className="flex mt-6 justify-center">
        <img className="rounded-t-lg" src={mindURL} width={300} alt="" />
      </a>

      <div className="p-5">
        <a href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business: {NameBusiness}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {Location}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone Number: {phone_number}</p>

        <div className="flex justify-around mt-4 mb-4">
        {social_links?.map((social) => {
          return (
            <SocialLink key={social.social} social_key={social.social} href={social.url}  />
          )})
        }
        </div>
        <div className="flex justify-center">
          <Link href={Link_Tree_Link} >
            Visit my LinkTree
          </Link>
        </div>
      </div>
    </div>
  )
}   
