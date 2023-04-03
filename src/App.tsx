import { Routes, Route } from "react-router-dom";

import { Main, Login, Signup } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
