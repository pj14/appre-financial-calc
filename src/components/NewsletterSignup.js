import React, { useEffect, useState } from "react";
import "./NewsletterSignup.css";
import { validateEmail } from "../utils/uitilityFunctions";

const NewsletterSignup = (props) => {
  const { emailInputDisabled, setGetResultsDisabled, setEmailInputDisabled } =
    props;

  const [newsletterChecked, setNewsletterChecked] = useState(true);
  const [waitlistChecked, setWaitlistChecked] = useState(true);
  const [noSignupChecked, setNoSignupChecked] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    if (newsletterChecked || waitlistChecked) {
      setEmailInputDisabled(false);
      setGetResultsDisabled(true);
    } else if (noSignupChecked) {
      setEmailInputDisabled(true);
      setGetResultsDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsletterChecked, waitlistChecked, noSignupChecked]);

  useEffect(() => {
    if (emailAddress.length > 0 && isValidEmail) setGetResultsDisabled(false);
    else if (!isValidEmail) setGetResultsDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailAddress, isValidEmail]);

  const newsletterOnchangeHandler = () => {
    setNewsletterChecked(!newsletterChecked);

    if (!newsletterChecked) {
      setNoSignupChecked(false);
    }
  };

  const waitlistOnchangeHandler = () => {
    setWaitlistChecked(!waitlistChecked);

    if (!waitlistChecked) {
      setNoSignupChecked(false);
    }
  };

  const nosignupOnchangeHandler = () => {
    setNoSignupChecked(!noSignupChecked);

    if (!noSignupChecked) {
      setNewsletterChecked(false);
      setWaitlistChecked(false);
    }
  };

  const inputOnchangeHandler = (e) => {
    const newEmail = e.target.value;
    setEmailAddress(newEmail);

    setIsValidEmail(validateEmail(newEmail));
  };

  return (
    <div className="signup-container">
      <div className="signup-checkbox">
        <input
          type="checkbox"
          checked={newsletterChecked}
          onChange={newsletterOnchangeHandler}
        />
        <label>
          Sign up for the Appre newsletter and get weekly personal finance tips!
        </label>
      </div>
      <div className="signup-checkbox">
        <input
          type="checkbox"
          checked={waitlistChecked}
          onChange={waitlistOnchangeHandler}
        />
        <label>
          Sign up to the Appre mobile app wait-list and get your free personal
          finance e-guide.
        </label>
      </div>
      <div className="signup-checkbox">
        <input
          type="checkbox"
          checked={noSignupChecked}
          onChange={nosignupOnchangeHandler}
        />
        <label>Do not sign me up</label>
      </div>
      <div
        className={`email-address-input ${
          emailInputDisabled ? "disabled" : ""
        }`}
      >
        <input
          type="email"
          id="emailInput"
          name="email"
          placeholder="Enter your email address"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          onChange={(e) => {
            inputOnchangeHandler(e);
          }}
          disabled={emailInputDisabled}
          value={emailAddress}
        />
        {isValidEmail ? null : (
          <p className="email-warning">Please enter a valid email address.</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
