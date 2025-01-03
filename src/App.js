import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import EditProfile from './pages/EditProfile';
import '@fontsource/sora';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/login';
import SignUp from './pages/SignUp'; 
import ProdukPage from './pages/ProdukPage';
import LokasiPage from './pages/LokasiPage';
import LaporanPage from './pages/LaporanPage';
import LaporanUserPage from './pages/LaporanUserPage';
import Warehouse from './pages/Gudang';
import Kedaluarsa from './pages/PengaturanKedaluarsa';
import PusatData from './pages/PusatData';
import InOut from './pages/InOutPage';
import Panduan from './pages/Panduan';
import ResetData from "./pages/ResetData";
import UbahSandi from "./pages/UbahSandi";
import Spesifikasi from "./pages/Spesifikasi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/lokasi" element={<LokasiPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
        <Route path="/laporanuser" element={<LaporanUserPage />} />
        <Route path="/gudang" element={<Warehouse />} />
        <Route path="/kedaluarsa" element={<Kedaluarsa />} />
        <Route path="/pusatdata" element={<PusatData />} />
        <Route path="/keluarmasuk" element={<InOut />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/petunjuk-manajemen-gudang" element={<Panduan />} />
        <Route path="/reset-data" element={<ResetData />} />
        <Route path="/ubah-kata-sandi" element={<UbahSandi />} />
        <Route path="/spesifikasi-tambahan" element={<Spesifikasi />} />
      </Routes>
    </div>
  );
}

export default App;
