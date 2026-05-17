import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { MaintenancePage } from "./components/MaintenancePage";

function MaintenancePageWrapper() {
  const navigate = useNavigate();
  return <MaintenancePage onBackToHome={() => navigate("/")} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/maintenance" element={<MaintenancePageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}