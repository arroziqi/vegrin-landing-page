import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { LandingPage } from "@/features/landing/pages/LandingPage";
import { MaintenancePage } from "@/features/maintenance/MaintenancePage";
import { TeamPage } from "@/features/team/TeamPage";

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
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}