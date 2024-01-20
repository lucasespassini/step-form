import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Recap } from "../pages/Recap";
import { Step1 } from "../pages/Step1";
import { Step2 } from "../pages/Step2";
import { Step3 } from "../pages/Step3";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step3" element={<Step3 />} />
      <Route path="/recap" element={<Recap />} />
    </Routes>
  );
};
