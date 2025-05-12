import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/components/Dashboard';
import Requests from './pages/requests/Requests'
import Details from './pages/requests/Details';
import Qr from './pages/components/Qr';
import Settings from './pages/settings/Settings';
import Manage from './pages/manage/Manage';
import Userdetails from './pages/manage/Userdetails';
import Login from './pages/components/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/request" element={<Requests />} />
          <Route path="/request/detail" element={<Details />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/manage/details" element={<Userdetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
