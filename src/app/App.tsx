import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { LandingPage } from "@/features/landing/pages/LandingPage";
import { MaintenancePage } from "@/features/maintenance/MaintenancePage";

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