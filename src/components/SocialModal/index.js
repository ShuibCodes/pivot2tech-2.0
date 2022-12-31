import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/initSupabase";

const SocialModal = () => {
  const [dismiss, setDismiss] = useState(true);
  const [email, setEmail] = useState("");
  const [noEmailError, setNoEmailError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (window) {
      setTimeout(() => {
        if (
          window.localStorage.getItem("dismiss-social-modal") === false ||
          window.localStorage.getItem("dismiss-social-modal") === undefined
        ) {
          setDismiss(false);
        } else {
          setDismiss(window.localStorage.getItem("dismiss-social-modal"));
        }
      }, 5000);
    }
  }, []);

  const handleDismiss = () => {
    if (email === "") {
      setNoEmailError(true);
      return;
    } else {
      supabase
        .from("pivot2tech")
        .insert({ email: email, awareness: selectedOption })
        .single().then(() => {
          window.localStorage.setItem("dismiss-social-modal", true);
          setDismiss(true);
        });
    }
  };

  const handleModalClose = () => {
    window.localStorage.setItem("dismiss-social-modal", true);
    setDismiss(true);
  }

  return (
    <div
      className={`modal ${dismiss ? "" : "d-block show fadeInUp"}`}
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="modal-body">
            <h4>Thank you for taking interest in Pivot2Tech! We are interested in getting to know how you heard about us!</h4>
            <p>Please provide your email address and select the option that best applies regarding how you heard about us.</p>
            <div>
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={noEmailError ? "mb-3 border border-danger" : "mb-3"}
              />
              {noEmailError && (<span className="text-danger">Please provide an email!</span>)}
              <RadioGroup>
                <div>
                  <input className="mr-3" onChange={(e) => setSelectedOption(e.target.value)} value="twitter" type="radio" name="option1" />
                  <label>Twitter</label>
                </div>
                <div>
                  <input className="mr-3" onChange={(e) => setSelectedOption(e.target.value)} value="instagram" type="radio" name="option1" />
                  <label>Instagram</label>
                </div>
                <div>
                  <input className="mr-3" onChange={(e) => setSelectedOption(e.target.value)} value="word of mouth" type="radio" name="option1" />
                  <label>Word of mouth</label>
                </div>
                <div>
                  <input className="mr-3" onChange={(e) => setSelectedOption(e.target.value)} value="other" type="radio" name="option1" />
                  <label>Other</label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={handleDismiss}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModal;
