import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine); // true

  useEffect(() => {
    addEventListener("online", () => {
      setStatus(true);
    });

    addEventListener("offline", () => {
      setStatus(false);
    });
  },[]);

  return status;
};

export default useOnlineStatus