import React, { Children, useEffect, useState } from "react";
import styles from "../styles/notification.module.css";
import { render } from "react-dom";
import { MdClose } from "react-icons/md";

export const Provider = ({ children: Children }) => {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    Element: null,
  });

  const [hidden, setHidden] = useState(true);

  const show = () => {
    setHidden(false);
  };

  const hide = () => {
    setHidden(true);
  };

  const set = (title, message, Element) => {
    setNotification({
      title,
      message,
      Element,
    });
  };

  return (
    <>
      {React.cloneElement(Children, {
        notification_props: {
          show,
          set,
          hide,
        },
      })}
      {!hidden && (
        <div className={styles.background} onClick={hide}>
          <div
            className={styles.box}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div className={styles.top}>
              <h3 className={styles.title}>{notification.title}</h3>
              <button onClick={hide} className={styles.close}>
                <MdClose />
              </button>
            </div>

            <p className={styles.message}>{notification.message}</p>
            {notification.Element && <notification.Element />}
          </div>
        </div>
      )}
    </>
  );
};
