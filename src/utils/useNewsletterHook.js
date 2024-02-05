import React, { useEffect, useState } from "react";

const useNewsletterHook = (props) => {
  const { setGetResultsDisabled, setEmailInputDisabled } = props;

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

  return {
    newsletterChecked,
    setNewsletterChecked,
    waitlistChecked,
    setWaitlistChecked,
    noSignupChecked,
    setNoSignupChecked,
    emailAddress,
    setEmailAddress,
    isValidEmail,
    setIsValidEmail,
  };
};

export default useNewsletterHook;
