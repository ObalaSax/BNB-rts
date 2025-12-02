import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import Navbar from "./Components/Navbar";

import LoginPage from "./Pages/Auth/LoginPage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import PageNotFound from "./Pages/PageNotFound";
import { useMemo, useState } from "react";
import LightTheme from "./assets/Theme/LightTheme";
import DarkTheme from "./assets/Theme/DarkTheme";
import { ThemeProvider } from "@mui/material";
import OneRoomPage from "./Pages/OneRoomPage";

function App() {
  type ThemeMode = "light" | "dark";
  const [isDarkMode, setDarkMode] = useState<ThemeMode>("light");
  const toggleDarkmode = () => {
    setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const BnbTheme = useMemo(
    () => (isDarkMode === "light" ? LightTheme : DarkTheme),
    [isDarkMode],
  );

  const isDark = isDarkMode === "dark";

  return (
    <ThemeProvider theme={BnbTheme}>
      <BrowserRouter>
        <Routes>
          {/**=================== */}
          <Route
            path="/"
            element={
              <Navbar isDarkMode={isDark} toggleDarkMode={toggleDarkmode} />
            }
          >
            <Route index path="/" element={<WelcomePage />} />
            <Route index path="/room/:id}" element={<OneRoomPage />} />
          </Route>
          {/**=================== */}
          <Route index path="/auth/login" element={<LoginPage />} />
          <Route index path="/auth/signup" element={<SignUpPage />} />
          {/**=================== */}
          <Route index path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
