import { useNavigate } from "react-router-dom";

export default function Step1CompanyDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Step 1: Company Details</h2>
      <input type="text" placeholder="Company Name" className="form-control mb-2" />
      <input type="url" placeholder="Company Website URL" className="form-control mb-2" />
      <textarea placeholder="Company Description" className="form-control mb-2"></textarea>
      <button className="btn btn-primary" onClick={() => navigate("/onboarding/step-2")}>
        Next
      </button>
    </div>
  );
}
