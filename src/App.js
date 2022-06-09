import { Route, Routes } from "react-router-dom";

import {useState} from 'react';

//Components
import AppHeader from './components/AppHeader/AppHeader.tsx'

//Pages
import HomePage from './pages/HomePage/HomePage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.tsx';

//Contexts
import {AuthContextProvider} from './context/AuthContext'
import ProtectedRoute from './components/reuseableComponents/ProtectedRoute.tsx';

//Styles
import './App.css';
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from './styles/themes/themes.tsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);


  return (
    <div className="App">
      <AuthContextProvider >
        <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
          <AppHeader setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/homepage" 
          element={
            <ProtectedRoute>
              <HomePage message={"yahel"} />
            </ProtectedRoute>} />
        </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
