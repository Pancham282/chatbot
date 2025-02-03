import { useNavigate } from "react-router-dom";

export default function Step3ViewScrapedData() {
  const navigate = useNavigate();
  
  // Dummy Scraped Data
  const scrapedData = [
    { page: "About Us", text: "We are a company that provides XYZ services." },
    { page: "Services", text: "Our services include A, B, and C." },
  ];

  return (
    <div>
      <h2>Step 3: View Scraped Data</h2>
      {scrapedData.map((data, index) => (
        <div key={index} className="card mb-2 p-2">
          <h5>{data.page}</h5>
          <p>{data.text}</p>
        </div>
      ))}
      <button className="btn btn-secondary" onClick={() => navigate("/onboarding/step-2")}>
        Back
      </button>
      <button className="btn btn-primary ms-2" onClick={() => navigate("/onboarding/step-4")}>
        Next
      </button>
    </div>
  );
}
