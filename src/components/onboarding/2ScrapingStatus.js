import { useNavigate } from "react-router-dom";

export default function Step2ScrapingStatus() {
  const navigate = useNavigate();
  
  // Dummy Data for Webpage Scraping Status
  const webpages = [
    { url: "https://example.com/about", status: "Scraped" },
    { url: "https://example.com/services", status: "Pending" },
    { url: "https://example.com/contact", status: "Scraped" },
  ];

  return (
    <div>
      <h2>Step 2: Webpage Scraping Status</h2>
      <ul className="list-group">
        {webpages.map((page, index) => (
          <li key={index} className="list-group-item">
            {page.url} - <strong>{page.status}</strong>
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/onboarding/step-1")}>
        Back
      </button>
      <button className="btn btn-primary mt-3 ms-2" onClick={() => navigate("/onboarding/step-3")}>
        Next
      </button>
    </div>
  );
}
