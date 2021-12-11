import styles from "./header.module.css";
import Logo from "../../public/images/svg/logo.svg";

import { IoCafe, IoClose, IoMenu, IoTriangleSharp } from "react-icons/io5";
import { useState } from "react";

const Header = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <header className={`${styles.container} ${props.container}`}>
          <div className={styles.header}>
            <a href="/">
              <div className={`${styles.logo} ${props.logo}`}>
                <Logo className="stroke-current fill-current" />
                <span className={props.theme ? { color: "text-" + theme } : {}}>
                  Ulastir.com
                </span>
              </div>
            </a>

            <div
              className={`${styles.link_container} ${props.links} !hidden lg:!block`}
            >
              <a href="#">Yatirimlar</a>
              <a href="#">Haberler</a>
              <a href="#">Biz Kimiz?</a>
              <a href="/uyeol" className={`${styles.box} ${props.box_link}`}>
                Giris Yap
              </a>
            </div>
            <div className="block lg:hidden text-main-blue-v2 text-5xl cursor-pointer">
              <IoMenu onClick={() => setMenu(true)} />
            </div>

            <div
              className={`menu fixed w-full h-screen  transition-all duration-500 bg-main-blue-v2 z-10 left-0 ${
                menu ? "top-0" : "top-[-100vh]"
              }`}
            >
              <IoClose
                className="text-white mx-auto mt-10 text-6xl cursor-pointer"
                onClick={() => setMenu(false)}
              />
              <input
                type="text"
                placeholder="Ara"
                className="mx-auto h-14 rounded-full w-[60%] block mt-10 bg-gray-700 outline-none focus:border-2 focus:bg-gray-800 border-white px-5 py-3 text-white font-main font-semibold"
              />
              <div className="w-full  flex flex-col mx-auto items-center mt-20 justify-between gap-y-12 children:w-max children:text-white children:text-2xl">
                <a href="#">Yatirimlar</a>
                <a href="#">Haberler</a>
                <a href="#">Biz Kimiz?</a>
                <a href="#" className="bg-green-500 px-2 py-3 rounded-md">
                  Giris Yap
                </a>
              </div>
            </div>
          </div>
        </header>
        {props.show_sub && (
          <div className={`${styles.subHeader} ${props.subHeader} `}>
            <div className={`${styles.currency} ${styles.down}`}>
              <span>Euro</span> <span>15.83</span> {<IoTriangleSharp />}
            </div>
            <div className={`${styles.currency} ${styles.down}`}>
              <span>USD</span> <span>13.38</span> {<IoTriangleSharp />}
            </div>
            <div className={`${styles.currency} ${styles.up}`}>
              <span>USCOM</span> <span>57.69</span>
              {<IoTriangleSharp />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
