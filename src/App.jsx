import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import SignUp from "./assets/Components/SignUp";
import Login from "./assets/Components/Login";
import PasswordReset from "./assets/Components/Passwordreset";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
