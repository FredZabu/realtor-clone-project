import { Routes, Route } from "react-router-dom";
import { Home, Profile, Offers, SignIn, SignUp, ForgotPassword } from './pages/index.js';
import { Header } from './components/index.js'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
