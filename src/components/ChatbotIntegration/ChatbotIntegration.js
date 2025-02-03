
import React from 'react';
import TestChatbot from './TestChatbot'; // Import the component
import IntegrateChatbot from './IntegrateChatbot';

const ChatbotIntegration = () => {
  return (
    <div className="container mt-5">
      <h2>Chatbot Integration & Testing</h2>
      
      {/* Test Chatbot Component */}
      <TestChatbot />

      {/* Integrate on Your Website Component */}
      <IntegrateChatbot />

      {/* Other Integration Buttons Here */}

    </div>
  );
};

export default ChatbotIntegration;
