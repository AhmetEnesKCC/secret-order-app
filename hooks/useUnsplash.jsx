import Axios from "axios";
import { useState } from "react";
import { createApi } from "unsplash-js";

const useUnsplash = (id) => {
  const [rawURL, setRawURL] = useState(null);
  const [error, setError] = useState(null);
  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY,
  });
  unsplash.photos
    .get({ photoId: id })
    .then((res) => {
      setRawURL(res?.response?.urls?.raw);
    })
    .catch(setError);

  return {
    error,
    rawURL,
  };
};

export default useUnsplash;
