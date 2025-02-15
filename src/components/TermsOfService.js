import React from "react";
import { useNavigate } from "react-router-dom";

function TermsOfService() {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem("tosAccepted", "true");
    navigate("/home");
  };

  return (
    <div>
      <h2>Terms of Service</h2>
      <p>Please read and accept our terms before continuing.</p>
      <p>
        I am participating in this service of my own volition. Any injury or legal consequences resulting
        from using this service is my own responsibility. We are not responsible for any actions taken by
        you or any other user of this service.
      </p>
      <button onClick={handleAccept}>I Accept</button>
    </div>
  );
}

export default TermsOfService;
