import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import TestChatbot from "./TestChatbot";
import IntegrateChatbot from "./IntegrateChatbot";

const ChatbotIntegration = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">🤖 Chatbot Integration & Testing</h2>
      
      {/* <TestChatbot /> */}
   
      <TestChatbot />

      <IntegrateChatbot />

      <button 
        className="btn btn-success w-50"
        data-bs-toggle="modal" data-bs-target="#testIntegrationModal"
        onClick={() => navigate("/success")}
      >
        ✅ Test Integration
      </button>
    </div>
  );
};

export default ChatbotIntegration;
