import CountryPhoneCodeDropDown from "../../components/countryPhoneCodeDropDown";
import styles from "../../styles/login.module.css";
import { BsEyeSlashFill, BsQuestionCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";
import Image from "next/image";
import Parallax from "../../providers/parallax";

const SignUp = () => {
  const [sifreToolTip, setSifreTooltip] = useState(false);
  const [formDatas, setFormDatas] = useState({
    email: "",
    password1: "",
    password2: "",
    tel: "",
  });

  const emailRef = useRef();
  const telRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formDatas.password1 !== formDatas.password2) {
      password1Ref.current.style.outline = "red 3px solid";
      password2Ref.current.style.outline = "red 3px solid";
      setTimeout(() => {
        password1Ref.current.style.outline = "unset";
        password2Ref.current.style.outline = "unset";
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.logo}>Logo</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Email</label>
            <div className={styles.input}>
              <input
                ref={emailRef}
                type="email"
                value={formDatas.email}
                onChange={(e) =>
                  setFormDatas({ ...formDatas, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Telefon</label>
            <div className={styles.input}>
              <input
                ref={telRef}
                type="tel"
                className="!pl-[40px]"
                value={formDatas.tel}
                onChange={(e) =>
                  setFormDatas({ ...formDatas, tel: e.target.value })
                }
              />
              {/* <CountryPhoneCodeDropDown className="!absolute !top-1/2 !left-[10px] !text-gray-600 transform -translate-y-1/2 !bg-black" /> */}
            </div>
          </div>
          <div className={styles.password_inputs}>
            <div className={styles.passwordLabel}>
              <label className={styles.label}>
                Sifre{" "}
                <BsQuestionCircleFill
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setSifreTooltip(true);
                  }}
                  onMouseLeave={() => {
                    setSifreTooltip(false);
                  }}
                />
                <div
                  style={{ opacity: sifreToolTip ? 1 : 0 }}
                  className={styles.sifreToolTip}
                >
                  Sifre 6 karakterden olusmalidir
                </div>
              </label>
              <input
                ref={password1Ref}
                type="password"
                maxLength="6"
                value={formDatas.password1}
                onChange={(e) =>
                  setFormDatas({ ...formDatas, password1: e.target.value })
                }
              />
            </div>
            <div className={styles.passwordLabel}>
              <label className={styles.label}>Sifre - Tekrar</label>
              <input
                ref={password2Ref}
                type="password"
                maxLength="6"
                value={formDatas.password2}
                onChange={(e) =>
                  setFormDatas({ ...formDatas, password2: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.yenikayitButton} type="submit">
              Kayit Ol
            </button>
            <span>Sifremi Unuttum ?</span>
            <button className={styles.girisButton}>Giris Yap</button>
          </div>
        </form>
      </div>
      <div className={styles.right_container}>
        <Parallax>
          <video
            className="w-full object-cover"
            autoPlay
            loop
            src="https://zippy.gfycat.com/DependentBelovedIndigobunting.mp4"
            onClick={(e) => {
              let el = e.currentTarget;
              let paused = el.paused;
              if (paused) {
                el.play();
              } else {
                el.pause();
              }
            }}
          />
        </Parallax>
      </div>
    </div>
  );
};

export default SignUp;
