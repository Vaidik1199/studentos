import AppRoutes from "./routes/AppRoutes";

import ScrollProgress from "./effects/ScrollProgress";
import MouseSpotlight from "./effects/MouseSpotlight";
import SmoothScroll from "./effects/SmoothScroll";

function App() {
  return (
  <>
    <SmoothScroll />

    <ScrollProgress />

    <MouseSpotlight />

    <AppRoutes />
  </>
  );
}

export default App;