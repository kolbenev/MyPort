import { Routes, Route } from "react-router-dom";
import Port from "./myPortfolio/Port.jsx";
import FokFitPage from "./myPortfolio/projects/fokfit/FokFitPage.jsx";
import ThreeCats from "./myPortfolio/projects/ThreeCats/ThreeCats.jsx";
import LibertyVpnPage from "./myPortfolio/projects/liberty/LibertyVpnPage.jsx";
import BananaPage from "./myPortfolio/projects/bananabot/Banana.jsx";
import ScrollToTop from "./myPortfolio/components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Port />} />
        <Route path="/fokfit" element={<FokFitPage />} />
        <Route path="/threecats" element={<ThreeCats />} />
        <Route path="/libertyvpn" element={<LibertyVpnPage />} />
        <Route path="/banana" element={<BananaPage />} />
      </Routes>
    </>
  );
}
