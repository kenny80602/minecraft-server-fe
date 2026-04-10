import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Servers from './pages/Servers';
import Dashboard from './pages/Dashboard';
import Options from './pages/Options';
import Console from './pages/Console';
import Logs from './pages/Logs';
import Players from './pages/Players';
import Software from './pages/Software';
import Files from './pages/Files';
import Worlds from './pages/Worlds';
import Backups from './pages/Backups';
import Access from './pages/Access';
import OAuthCallback from './pages/OAuthCallback';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path="/servers" element={<Servers />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/options" element={<Options />} />
          <Route path="/console" element={<Console />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/players" element={<Players />} />
          <Route path="/software" element={<Software />} />
          <Route path="/files" element={<Files />} />
          <Route path="/worlds" element={<Worlds />} />
          <Route path="/backups" element={<Backups />} />
          <Route path="/access" element={<Access />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
