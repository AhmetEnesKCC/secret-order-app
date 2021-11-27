import { useEffect, useState } from "react"
import styles from "../styles/notification.module.css"


const useNotification = (title, message) => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(false)
    }



    const Component = () => {
        return show ? <div className={styles.background}>
            <div className={styles.box}>
                <button onClick={() => handleClick()} className={styles.close}></button>
                <h3 className={styles.title}>{title}</h3>
                <p classNam={styles.message}>{message}</p>
            </div>
        </div> : <></>
    }

    const htmlString = renderToString(Component);

    document.insertAdjacentHTML("beforeend", renderToString)



    return {
        setter: setShow,
        state: show,
        Component
    }

}
export default useNotification