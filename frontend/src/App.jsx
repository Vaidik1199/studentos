import AppRoutes from "./routes/AppRoutes";

import ScrollProgress from "./effects/ScrollProgress";
import MouseSpotlight from "./effects/MouseSpotLight";
import SmoothScroll from "./effects/SmoothScroll";
import BackToTop from "./effects/BackToTop";

function App() {
  return (
  <>
  <SmoothScroll />

  <ScrollProgress />

  <MouseSpotlight />

  <BackToTop />

  <AppRoutes />
</>
  );
}

export default App;