import { useState } from "react";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" minHeight="100vh">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            onModeClick={() =>
              setMode((prevMove) => (prevMove === "dark" ? "light" : "dark"))
            }
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
