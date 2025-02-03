import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IntegrateChatbot = () => {
  return (
    <div className="text-center mt-3">
      {/* Button to Open Modal */}
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#integrationModal"
      >
        Integrate on Your Website
      </button>

      {/* Integration Modal */}
      <div
        className="modal fade"
        id="integrationModal"
        tabIndex="-1"
        aria-labelledby="integrationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="integrationModalLabel">
                Integrate Chatbot
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Option 1: Copy-Paste Code */}
              <h6>Option 1: Copy-Paste Code</h6>
              <p>
                Copy the following code and paste it inside the <code>{`<head>`}</code> of your website:
              </p>
              <pre className="bg-light p-2 border rounded">
                {`<script src="https://your-chatbot-url.com/chatbot.js"></script>`}
              </pre>
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  navigator.clipboard.writeText(
                    '<script src="https://your-chatbot-url.com/chatbot.js"></script>'
                  )
                }
              >
                Copy Code
              </button>

              {/* Option 2: Mail Instructions */}
              <h6 className="mt-4">Option 2: Mail Instructions</h6>
              <p>Send the integration instructions to your developer:</p>
              <button className="btn btn-secondary">Mail Instructions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateChatbot;


