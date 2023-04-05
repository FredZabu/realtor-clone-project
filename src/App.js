import { Routes, Route } from "react-router-dom";
import { Home, Profile, Offers, SignIn, SignUp, ForgotPassword } from './pages/index.js';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
