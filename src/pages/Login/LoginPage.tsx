import { useEffect } from "react";
import { useNavigate } from "react-router";

import { LoginForm } from "src/components";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  return <LoginForm />;
};

export default LoginPage;
