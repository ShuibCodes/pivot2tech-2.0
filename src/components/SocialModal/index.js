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
      }, 6000);
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
        .single()
        .then(() => {
          window.localStorage.setItem("dismiss-social-modal", true);
          setDismiss(true);
        });
    }
  };

  const handleModalClose = () => {
    window.localStorage.setItem("dismiss-social-modal", true);
    setDismiss(true);
  };
  return (
    <div
      className={`modal ${dismiss ? "" : "d-block show fadeInUp"}`}
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content p-3">
          <div className="modal-body">
            <button
              style={{
                position: "absolute",
                right: "30px",
                top: "-8px",
                backgroundColor: "white",
                fontSize: "22px",
                fontWeight: "600",
              }}
              onClick={handleModalClose}
            >
              x
            </button>

            <div>
              <div>
                <img
                  style={{ marginTop: "20px" }}
                  width="450px"
                  height="250px"
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                ></img>
              </div>
              <div>
                <div>
                  <h4 className="py-20">Sign up to Pivot2Tech Updates</h4>
                  <ul>
                    {" "}
                    <li>✅ New Cohorts & Discounts </li>
                    <li>✅ New Courses </li>
                  </ul>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={
                      noEmailError ? "mb-3 border border-danger" : "mb-3"
                    }
                  />
                  {noEmailError && (
                    <span className="text-danger">
                      Please provide an email!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              id="newsletter-subscribe"
              onClick={handleDismiss}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialModal;
