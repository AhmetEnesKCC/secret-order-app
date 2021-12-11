import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/uyeol.module.css";
import Axios from "axios";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useNotification from "../hooks/useNotification";
import Input from "../components/uyeol/input";
import Head from "next/head";

const NotificationElement = () => {
  return (
    <div className="flex flex-col">
      <p className="m-0 text-black text-lg">Ornek: </p>
      <div className="mx-auto p-2 border-2 shadow-md">123456</div>
    </div>
  );
};

const Uyeol = ({ notification_props }) => {
  useEffect(() => {
    notification_props.set(
      "Ufak bir uyari",
      "Pininiz 6 sayidan olusmalidir",
      NotificationElement
    );
  }, []);

  const [formType, setFormType] = useState("giris_yap");

  const [phoneCodes, setPhoneCodes] = useState([]);

  const [pin1Type, setPin1Type] = useState("password");
  const [pin2Type, setPin2Type] = useState("password");
  const [girisPinType, setGirisPinType] = useState("password");

  // TODO

  // Fetch Country Codes whenever arrive to better connection

  function isNumber(num) {
    return /\d/.test(num);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ulastir.com - Üye Ol</title>
      </Head>
      <div className={styles.content}>
        <h2 className={styles.title}>Merhaba</h2>
        <p>Ulastir.com ' a giris yap veya kayit ol</p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.form_type}>
            <button
              data_name="giris_yap"
              onClick={(e) => {
                setFormType("giris_yap");
              }}
              className={styles.form_type_button}
              data-type={formType === "giris_yap" && "active"}
            >
              Giris Yap
            </button>
            <button
              data-name="kayit_ol"
              data-type={formType === "kayit_ol" && "active"}
              className={styles.form_type_button}
              onClick={(e) => {
                setFormType("kayit_ol");
              }}
            >
              Kayit Ol
            </button>
          </div>
          <div className={styles.email_input}>
            <label htmlFor="">E-posta</label>
            <Input.Email
              whenValueChange={(val) => {
                console.log(val);
              }}
            />
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
              <Input.Phone maxLength={10} />
            </div>
            <div className={styles.pinInputs}>
              <div className={styles.pinInputContainer}>
                <label className="flex flex-row space-x-2">
                  <span>Pin</span>
                  <BsQuestionCircle
                    onClick={() => {
                      notification_props.show();
                    }}
                    className="inline-block cursor-pointer"
                  />
                </label>

                <div className={styles.pinInput}>
                  <Input.Pin maxLength={6} type={pin1Type} />
                  <div
                    className={styles.svg}
                    onClick={(e) =>
                      setPin1Type(pin1Type === "password" ? "text" : "password")
                    }
                  >
                    {pin1Type === "password" ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.pinInputContainer}>
                <label>Pin - Tekrar</label>
                <div className={styles.pinInput}>
                  <Input.Pin maxLength={6} type={pin2Type} />
                  <div
                    className={styles.svg}
                    onClick={(e) =>
                      setPin2Type(pin2Type === "password" ? "text" : "password")
                    }
                  >
                    {pin2Type === "password" ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.submitButton}>UYE OL</button>
        </form>
      </div>
    </div>
  );
};

export default Uyeol;

export const getStaticProps = () => {
  return {
    props: {
      header: {
        container: "bg-white",
        links: "!text-main-blue-v2",
        logo: "text-main-blue-v2",
        box_link: "bg-gray-500",
        show_sub: false,
      },
    },
  };
};
