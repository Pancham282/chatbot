import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestChatbot = () => {
  const openChatbotPage = () => {
    window.open('https://www.tatamotors.com/', '_blank'); // Replace with actual client website URL
  };

  return (
    <div className="container mt-3">
      {/* Feedback Topbar */}
      <div className="alert alert-info text-center" role="alert">
        Chatbot not working as intended? <a href="https://your-feedback-form.com" target="_blank" rel="noopener noreferrer">Share feedback</a>
      </div>

      {/* Test Chatbot Button */}
      <div className="text-center">
        <button className="btn btn-primary" onClick={openChatbotPage}>
          Test Chatbot
        </button>
      </div>
    </div>
  );
};

export default TestChatbot;
