import { useEffect } from "react";
import { useNavigate } from "react-router";

import { SignupForm } from "src/components";

const SignupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  return <SignupForm />;
};

export default SignupPage;
