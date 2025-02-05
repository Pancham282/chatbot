import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IntegrateChatbot = () => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const chatbotScript = `<script src="https://your-chatbot-url.com/chatbot.js"></script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(chatbotScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
  };

  const handleSendEmail = () => {
    if (email.trim() === "") return;
    setEmailSent(true);
    setTimeout(() => {
      setEmailSent(false);
      setEmail("");
    }, 3000); // Reset after 3s
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      {/* Integrate on Your Website Button */}
      <button
        className="btn btn-primary w-50 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#integrateChatbotModal"
      >
        🔗 Integrate on Your Website
      </button>

      {/* Integration Modal */}
      <div className="modal fade" id="integrateChatbotModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <h4 className="mb-3 text-center">🚀 Integrate Your Chatbot</h4>

            {/* Option 1: Copy-Paste Code */}
            <h6>Option 1: Copy-Paste Code</h6>
            <p>Copy the following code and paste it inside the <code>&lt;head&gt;</code> of your website:</p>
            <pre className="bg-light p-2 border rounded">{chatbotScript}</pre>
            <button className="btn btn-secondary" onClick={handleCopy}>
              📋 {copied ? "Copied!" : "Copy Code"}
            </button>

            {/* Option 2: Mail Instructions */}
            <div className="mt-3">
              <h5>📧 Option 2: Mail Instructions</h5>
              <p>Enter your developer's email to send integration instructions:</p>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter developer's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-info w-100" onClick={handleSendEmail}>
                {emailSent ? "✅ Instructions Sent!" : "📩 Send Instructions"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrateChatbot;
