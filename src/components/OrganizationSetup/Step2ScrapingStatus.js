import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const dummyPages = [
  { id: 1, url: "https://example.com/about", status: "Scraped", dataChunks: ["About Us content", "Company history"] },
  { id: 2, url: "https://example.com/services", status: "Scraped", dataChunks: ["Service details", "Pricing"] },
  { id: 3, url: "https://example.com/contact", status: "Pending", dataChunks: [] },
];
// WebpageScrapingStatus
export default function Step2ScrapingStatus() {
    const navigate =useNavigate();
    
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📄 Webpage Scraping Status</h2>

      {/* Webpage List */}
      <ul className="list-group">
        {dummyPages.map((page) => (
          <li
            key={page.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${page.status === "Scraped" ? "list-group-item-success" : "list-group-item-warning"}`}
            onClick={() => setSelectedPage(page)}
            style={{ cursor: "pointer" }}
          >
            {page.url}
            <span className="badge bg-secondary">{page.status}</span>
          </li>
        ))}
      </ul>

      {/* Display Scraped Data */}
      {selectedPage && (
        <div className="mt-4 p-3 border rounded">
          <h4>📄 {selectedPage.url}</h4>
          <h6>Status: <span className={selectedPage.status === "Scraped" ? "text-success" : "text-warning"}>{selectedPage.status}</span></h6>
          <h5 className="mt-3">🔍 Scraped Data:</h5>
          {selectedPage.dataChunks.length > 0 ? (
            <ul>
              {selectedPage.dataChunks.map((chunk, index) => (
                <li key={index}>📌 {chunk}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">⏳ Data not available yet...</p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4">
        <button className="btn btn-primary me-2">⏳ Wait for Chatbot Training</button>
        
      </div>

      <button className="btn btn-secondary mt-3" onClick={() => navigate("/step-1")}>
        Back
      </button>
      <button className="btn btn-primary mt-3 ms-2" onClick={() => navigate("/step-3")}>
        Next
      </button>


    </div>
  );
}