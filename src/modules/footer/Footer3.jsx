import React, { useState } from "react";

const Footer3 = () => {
  const [isCopied, setIsCopied] = useState(false); // State to track if the button is disabled

  const handleCopy = () => {
    const email = "zhimaro.nieves@gmail.com";

    // Copy the email to the clipboard
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true); // Disable the button

      // Re-enable the button after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };
  return (
    <>
      <section className="footer-section d-flex flex-row align-item-center justify-content-center">
        <div className="footer3-container d-flex flex-column justify-content-center align-items-center">
          <h6 className="h-primary-color">Looking for a UX/UI Designer?</h6>
          <p className="p-text-muted text-center">
            I'm open to full-time UI/UX design opportunities. Let’s connect and
            discuss how I can contribute to your team.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-2 p-3 footer3-email-container">
            <span
              className=" border px-4 py-3 bg-white border d-flex flex-row align-items-center footer3-email-container-span"
              style={{
                fontSize: "20px",

                fontWeight: 600,
                borderRadius: "16px",
              }}
            >
              <i className="bx bx-envelope text-secondary"></i>
              <span className="mx-2 h-primary-color">
                zhimaro.nieves@gmail.com
              </span>
            </span>
            <button
              className="footerPrimaryBtn"
              onClick={handleCopy}
              disabled={isCopied} // Disable the button when copied
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>
      <section className="rights-section d-flex flex-row align-items-center justify-content-center">
        <div className="border-top h-100 d-flex flex-row justify-content-between align-items-end rights-section-container">
          <div className="h-100 position-relative w-100">
            <p className="p-text-muted position-absolute">
              © 2025 Zhimaro. All rights reserved.
            </p>
          </div>
          <div className="d-flex flex-row footer-icons">
            <i class="bx bxl-linkedin p-text-muted fs-3"></i>
            <i class="bx bxs-envelope p-text-muted fs-3"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer3;
