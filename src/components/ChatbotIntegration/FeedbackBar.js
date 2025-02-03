
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackBar = () => (
    <div className="bg-info p-2 mb-2">
        <p className="mb-0 text-white">Chatbot not working as intended? <a href="/feedback" className="text-white">Share feedback</a></p>
    </div>
);

export default FeedbackBar;
