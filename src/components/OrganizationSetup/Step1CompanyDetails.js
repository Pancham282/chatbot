
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import { useNavigate } from "react-router-dom";
// OrganizationSetup
export default function Step1CompanyDetails() {
    const navigate = useNavigate();

  const [metaDescription, setMetaDescription] = useState("");
  const [loadingMeta, setLoadingMeta] = useState(false);

  // Validation Schema for the form
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Company name is required"),
    websiteUrl: Yup.string().url("Invalid URL").required("Website URL is required"),
    companyDescription: Yup.string().required("Company description is required"),
  });

  // Function to fetch the meta description from the website URL
  const fetchMetaDescription = async (url) => {
    setLoadingMeta(true);
    try {
      // Simulating an API call to fetch meta description (for now using dummy data)
      const response = await axios.get(`https://api.abc.com/url=${url}`);
      // Dummy data for now (in real case, this would be fetched from the backend)
      setMetaDescription("This is a dummy meta description fetched from the URL.");
    } catch (error) {
      alert("Error fetching meta description.");
    }
    setLoadingMeta(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg rounded p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-3">Organization Setup</h2>

        <Formik
          initialValues={{
            companyName: "",
            websiteUrl: "",
            companyDescription: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form values submitted:", values);
            // Proceed to the next step in your flow
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              {/* Company Name */}
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <Field type="text" name="companyName" className="form-control" />
                <ErrorMessage name="companyName" component="div" className="text-danger small" />
              </div>

              {/* Website URL */}
              <div className="mb-3">
                <label className="form-label">Website URL</label>
                <Field
                  type="url"
                  name="websiteUrl"
                  className="form-control"
                  onBlur={(e) => {
                    const url = e.target.value;
                    if (url) fetchMetaDescription(url); // Fetch meta description when URL is blurred
                  }}
                />
                <ErrorMessage name="websiteUrl" component="div" className="text-danger small" />
              </div>

              {/* Meta Description */}
              <div className="mb-3">
                <label className="form-label">Meta Description</label>
                {loadingMeta ? (
                  <div className="text-muted">Loading...</div>
                ) : (
                  <textarea
                    className="form-control"
                    rows="3"
                    value={metaDescription}
                    readOnly
                  />
                )}
              </div>

              {/* Company Description */}
              <div className="mb-3">
                <label className="form-label">Company Description</label>
                <Field
                  as="textarea"
                  name="companyDescription"
                  className="form-control"
                  rows="4"
                />
                <ErrorMessage name="companyDescription" component="div" className="text-danger small" />
              </div>

              {/* Submit Button */}
              
              <button type="submit" className="btn btn-primary w-100 mb-2" disabled={isSubmitting}>
                Submit
              </button>
              <button className="btn btn-primary w-100" onClick={() => navigate("/step-2")}>
                Next
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
