// export default WebpageList;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Dummy scraped data
const scrapedWebpages = [
  {
    id: 1,
    url: "https://example.com/about",
    title: "About Us",
    status: "Scraped",
    dataChunks: [
      { id: 101, type: "Text", content: "We are a leading tech company..." },
      { id: 102, type: "Metadata", content: "Keywords: innovation, AI, startup" },
    ],
  },
  {
    id: 2,
    url: "https://example.com/contact",
    title: "Contact Us",
    status: "Scraped",
    dataChunks: [
      { id: 201, type: "Text", content: "You can reach us at contact@example.com." },
      { id: 202, type: "Metadata", content: "Phone: +1234567890" },
    ],
  },
];
// ViewScrapedData
export default function Step3ViewScrapedData() {
  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">View Scraped Data</h2>

      {/* Step 3: Scraped Data View */}
      {selectedPage ? (
        <div className="card p-3">
          <h5>{selectedPage.title}</h5>
          <p className="text-muted">{selectedPage.url}</p>

          <h6>Extracted Data:</h6>
          <ul className="list-group mb-3">
            {selectedPage.dataChunks.map((chunk) => (
              <li key={chunk.id} className="list-group-item">
                <strong>{chunk.type}:</strong> {chunk.content}
              </li>
            ))}
          </ul>

          <button className="btn btn-secondary me-2" onClick={() => setSelectedPage(null)}>🔙 Back</button>
        
        </div>
      ) : (
        // List of scraped webpages
        <div>
          <h6>Select a webpage to view scraped data:</h6>
          <ul className="list-group">
            {scrapedWebpages.map((page) => (
              <li key={page.id} className="list-group-item list-group-item-action" onClick={() => setSelectedPage(page)}>
                {page.title} - <span className="text-muted">{page.url}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    <button className="btn btn-secondary" onClick={() => navigate("/step-2")}>
        Back
      </button>
      <button className="btn btn-primary ms-2" onClick={() => navigate("/step-4")}>
        Next
      </button>
    </div>
  );
}
