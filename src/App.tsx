import { Routes, Route } from "react-router-dom";

import { MainPage, LoginPage, SignupPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
