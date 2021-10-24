import { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import usePhoneCodes from "../hooks/usePhoneCodes";

const CountryPhoneCodeDropDown = (props) => {
  const { error, phoneCodes } = usePhoneCodes();
  useEffect(() => {
    console.log(phoneCodes);
  }, [phoneCodes]);
  return <Dropdown className={props.className} options={phoneCodes} />;
};

export default CountryPhoneCodeDropDown;
