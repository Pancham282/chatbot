
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

const SuccessUI = () => {
  return (
    <div className="text-center p-4">
      {/* Success Header */}
      <h3 className="mb-3">Integration Successful!</h3>
      <p className="mb-4">Congratulations! Your chatbot is successfully integrated.</p>

      {/* Action Buttons */}
      <button className="btn btn-primary m-2">
        Explore Admin Panel
      </button>
      <button className="btn btn-secondary m-2">
        Start Talking to Your Chatbot
      </button>

      {/* Social Media Buttons */}
      <div className="mt-3">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-social-icon btn-facebook m-2">
          <i className="fa fa-facebook-f"></i> Facebook
        </a>
        <a href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check%20out%20this%20chatbot!" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-social-icon btn-twitter m-2">
          <i className="fa fa-twitter"></i> Twitter
        </a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=Chatbot%20Integration&summary=Check%20out%20this%20chatbot%20integration!" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="btn btn-social-icon btn-linkedin m-2">
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
      </div>


    </div>
  );
};

export default SuccessUI; 
