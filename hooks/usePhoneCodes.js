import Axios from "axios";
import { type } from "os";

const { useState, useEffect } = require("react");

const usePhoneCodes = () => {
  const [phoneCodes, setPhoneCodes] = useState([]);
  const [error, setError] = useState({ message: "", type: false });
  const fetchdata = async () => {
    fetch("http://country.io/phone.json", { mode: "no-cors" });
  };
  useEffect(() => {
    fetch("http://country.io/phone.json").then((res) => console.log(res));
  }, []);

  return {
    phoneCodes,
    error,
  };
};

export default usePhoneCodes;
