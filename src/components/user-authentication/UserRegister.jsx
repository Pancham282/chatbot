
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(true);
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const [registeredUsers, setRegisteredUsers] = useState([
    { name: "pancham", email: "pancham@gmail.com", password: "password123" },
  ]);
  const [loginError, setLoginError] = useState("");

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
    ...(isSignUp && !isVerificationStep && { name: Yup.string().required("Name is required") }),
    ...(isSignUp && isVerificationStep && { verificationCode: Yup.string().required("Enter verification code") }),
  });

  // Handle Registration (Step 1)
  const handleSignUp = async (values) => {
    const userExists = registeredUsers.some((user) => user.email === values.email);
    if (userExists) {
      alert("Email already registered. Please sign in.");
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    alert(`Verification code sent to ${values.email}: ${code}`);
    setIsVerificationStep(true);
  };

  // Handle Verification (Step 2)
  const handleVerifyCode = async (values) => {
    if (values.verificationCode === generatedCode) {
      setRegisteredUsers([...registeredUsers, { name: values.name, email: values.email, password: values.password }]);
      alert("Registration successful! You can now sign in.");
      setIsVerificationStep(false);
      setIsSignUp(false);
    } else {
      alert("Invalid verification code. Try again.");
    }
  };

  // Handle Sign In
  const handleSignIn = async (values) => {
    const user = registeredUsers.find((user) => user.email === values.email && user.password === values.password);
    if (user) {
      alert(`Welcome, ${user.name}! You have successfully signed in.`);
      setLoginError("");
      navigate("/step-1");
    } else {
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg rounded p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-3">{isSignUp ? (isVerificationStep ? "Verify Email" : "Sign Up") : "Sign In"}</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "", verificationCode: "" }}
          validationSchema={validationSchema}
          onSubmit={isSignUp ? (isVerificationStep ? handleVerifyCode : handleSignUp) : handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form>
              {!isVerificationStep && (
                <>
                  {isSignUp && (
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage name="name" component="div" className="text-danger small" />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger small" />
                  </div>

                  {loginError && <div className="text-danger small text-center mb-3">{loginError}</div>}
                </>
              )}

              {isSignUp && isVerificationStep && (
                <div className="mb-3">
                  <label className="form-label">Enter Verification Code</label>
                  <Field type="text" name="verificationCode" className="form-control" />
                  <ErrorMessage name="verificationCode" component="div" className="text-danger small" />
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isVerificationStep ? "Verify Code" : isSignUp ? "Sign Up" : "Sign In"}
              </button>

              {!isVerificationStep && (
                <div className="d-flex align-items-center my-3">
                  <hr className="flex-grow-1" />
                  <span className="mx-2 text-muted">OR</span>
                  <hr className="flex-grow-1" />
                </div>
              )}

              {!isVerificationStep && (
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 mt-2 d-flex align-items-center justify-content-center"
                  onClick={() => alert("Google Login Clicked!")}
                >
                  <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" className="me-2" />
                  Continue with Google
                </button>
              )}

              {!isVerificationStep && (
                <p className="text-center mt-3">
                  {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                  <span className="text-primary" onClick={() => { setIsSignUp(!isSignUp); setIsVerificationStep(false); setLoginError(""); }} style={{ cursor: "pointer" }}>
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </span>
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
