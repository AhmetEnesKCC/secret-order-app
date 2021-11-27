import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/uyeol.module.css";
import Axios from "axios";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useNotification from "../hooks/useNotification";
const Uyeol = () => {
  const [phoneCodes, setPhoneCodes] = useState([]);

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState("");

  const pinInput1 = useRef(null);
  const pinInput2 = useRef(null);

  // TODO

  // Fetch Country Codes whenever arrive to better connection

  // useEffect(() => {
  //     Axios.get("http://country.io/phone.json").then(res => setPhoneCodes(res.data))
  // })

  const handlePinInput = (e) => {
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, -1);
    } else if (!e.target.value[e.target.value.length - 1].match(/\d/)) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const handleInputType = (self, inputRef) => {
    inputRef.current.setAttribute(
      "type",
      inputRef.current.getAttribute("type") == "number" ? "password" : "number"
    );
  };

  function isNumber(num) {
    return /\d/.test(num);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Merhaba</h2>
        <p>Ulastir.com ' a giris yap veya kayit ol</p>
        <form action="" className={styles.form}>
          <div className={styles.form_type}>
            <button data_name="giris_yap" className={styles.form_type_button}>
              Giris Yap
            </button>
            <button
              data-name="kayit_ol"
              data-type={"active"}
              className={styles.form_type_button}
            >
              Kayit Ol
            </button>
          </div>
          <div className={styles.email_input}>
            <label htmlFor="">E-posta</label>
            <input type="email" />
          </div>
          <div className={styles.phone_input}>
            <label htmlFor="">Telefon Numarasi</label>
            <div className={styles.phone_group}>
              <div className={styles.select}>
                <select>
                  {/* TODO  
                                
                                    Add Phone codes as <option></option>
                                    
                                */}
                  <option>+90</option>
                </select>
                <div className={styles.down_arrow}>
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>

              <input
                onKeyDown={(e) => {
                  if (e.code == "Backspace" || e.code == "Delete") {
                    setPhoneValue(phoneValue.slice(0, -1));
                  }
                }}
                onInput={(e) => {
                  let value = e.target.value;
                  let value_length = value.length;

                  if (
                    phoneInputValue[phoneInputValue.length - 1] === ")" ||
                    isNumber(value[value_length - 1])
                  ) {
                    setPhoneValue(`${phoneValue}${value[value_length - 1]}`);
                  }
                }}
                type="text"
                value={phoneInputValue}
                pattern="\d*"
              />
            </div>
            <div className={styles.pinInputs}>
              <div className={styles.pinInputContainer}>
                <label className="flex flex-row space-x-2">
                  <span>Pin</span>
                  <BsQuestionCircle
                    onClick={() => {
                      const {} = useNotification(
                        "Ufak bir bilgilendirme",
                        "Pininiz 6 sayidan olusmalidir."
                      );
                    }}
                    className="inline-block"
                  />
                </label>
                <div className={styles.pinInput}>
                  <input
                    type="number"
                    ref={pinInput1}
                    onInput={handlePinInput}
                  />
                  <div
                    className={styles.svg}
                    onClick={(e) => handleInputType(e, pinInput1)}
                  >
                    <AiFillEye />
                  </div>
                </div>
              </div>
              <div className={styles.pinInputContainer}>
                <label>Pin - Tekrar</label>
                <div className={styles.pinInput}>
                  <input
                    type="number"
                    ref={pinInput2}
                    max="999999"
                    onInput={handlePinInput}
                  />
                  <div
                    className={styles.svg}
                    onClick={(e) => handleInputType(e, pinInput2)}
                  >
                    <AiFillEye />
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.submitButton}>UYE OL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uyeol;
