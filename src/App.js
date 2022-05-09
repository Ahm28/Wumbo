import { Box } from "@mui/system";
import ResponsiveAppBar from "./Components/AppBar/AppBar";
import Footer from "./Components/Footer/Footer";
import Heroes from "./Components/Heroes.js/Index";
import MainSection from "./Components/MainSection/MainSection";
import MainSection2 from "./Components/MainSection/MainSection2";
import { MainSection3 } from "./Components/MainSection/MainSection3";
import MainSection4 from "./Components/MainSection/MainSection4";
import { MainSection5 } from "./Components/MainSection/MainSection5";
import MainSection6 from "./Components/MainSection/MainSection6";
import MainSection7 from "./Components/MainSection/MainSection7";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #E4EFFF 0%, rgba(228, 239, 255, 0.6) 92.51%, rgba(228, 239, 255, 0) 100%)",
        }}
      >
        <Heroes />
        <MainSection />
      </Box>
      <Box>
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5 />
        <MainSection6 />
        <MainSection7 />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
