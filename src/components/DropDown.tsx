import {Dispatch, SetStateAction, ChangeEvent} from "react";
import { Socials } from "../pages";
type DropDownInputProps = {
  value: string;
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
}
export const DropDownInput = ({ value, setSelectedValues }: DropDownInputProps) => {
  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedValues((prev) => [...prev, e.target.value]); } else {
      setSelectedValues((prev) => prev.filter((value) => value !== e.target.value));
    }
  }
  return (
    <li>
      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input onChange={HandleChange}  id={`checkbox-item-${value}`} type="checkbox" value={`${value}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{value}</label>
      </div>
    </li>
  )
}

type DropDownProps = {
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  values?: Socials;
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
}

export const DropDown = ({ dropDown, setDropDown, values,  setSelectedValues }: DropDownProps) => {
  return (
    <>
      <div className="mb-5">
        <button
          type="button"
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setDropDown((prev) => !prev)}
        >add socials</button>
        <div id="dropdownBgHover" className={`z-10 ${dropDown ? "" : "hidden"} mb-2 rounded-lg shadow dark:bg-gray-700`}>
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
            {values?.map((value) => (
              <DropDownInput key={value} value={value} setSelectedValues={setSelectedValues}  />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
