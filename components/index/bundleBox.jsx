import { useState } from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { MdLink, MdMicExternalOn, MdOutlineLink } from "react-icons/md";
import { useEffect } from "react";
import useUnsplash from "../../hooks/useUnsplash";

const BundleBox = ({ imageID, title, text, link }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomSecond = Math.floor(Math.random() * 3) + 2;
    setTimeout(() => {
      setLoading(false);
    }, randomSecond * 1000);
  }, []);

  const { rawURL, error } = useUnsplash(imageID);

  return (
    <a
      href={link}
      className={`${
        loading ? "skeleton-loading" : ""
      } flex flex-col justify-between hover:bg-bundle-box hover:bg-opacity-30 cursor-pointer pb-4`}
      style={{ "--bg-color": "#373737" }}
    >
      {!loading && (
        <>
          {!error && rawURL && (
            <img src={rawURL} className="h-[300px] w-full" />
          )}
          {title && (
            <h3 className="text-white text-opacity-70 text-3xl  px-5 font-serif">
              {title}
            </h3>
          )}
          {text && <p className="px-5 text-white text-xl mb-10">{text}</p>}
        </>
      )}
    </a>
  );
};

export default BundleBox;
