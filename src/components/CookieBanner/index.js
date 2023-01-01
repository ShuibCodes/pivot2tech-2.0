import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [dismiss, setDismiss] = useState(true);

  useEffect(() => {
    if (window) {
      if (window.localStorage.getItem("dismiss-cookie-banner") === false || window.localStorage.getItem("dismiss-cookie-banner") === undefined) {
        setDismiss(false);
      } else {
        setDismiss(window.localStorage.getItem("dismiss-cookie-banner"));
      }

    }
  }, []);

  const handleDmismiss = () => {
    window.localStorage.setItem("dismiss-cookie-banner", true)
    setDismiss(true);
  };

  return (
    <>
      {
        // TODO: We probably want to write up a quick cookie policy for this.
        dismiss ? undefined : (
          <div className="shadow-sm float-right fixed-bottom p-20 bg-color text-white m-5 width-half rounded">
            <p>We use cookies to provide necessary functionality and improve your experience.</p>
            <button onClick={handleDmismiss} className="btn btn-primary mr-3">Accept</button>
            <button onClick={handleDmismiss} className="btn btn-secondary">Close</button>
          </div>
        )
      }
    </>
  );
};

export default CookieBanner;
