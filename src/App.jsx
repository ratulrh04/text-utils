import { useState } from "react";
import Accordian from "./components/Accordian";
import Nav from "./components/Nav";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert"; // Uncommented this line
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage"; // Assuming you will define or import this

const App = () => {
  // Navbar props
  let navItems = {
    item1: 'home',
    item2: 'Text-Utils',
    item3: 'About-Table',
  };

  // TextArea heading props
  let textHeading = {
    heading: 'This is Text Area',
  };

  // Navbar dark mode
  const [mode, setMode] = useState('dark'); // Default mode: dark
  const [bodyMode, setBodyMode] = useState('#1c0238'); // Background color
  const [alert, setAlert] = useState(null);

  // Alert function
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Navbar switch mode function
  let switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBodyMode('black');
      showAlert('Dark mode is enabled', 'success');
      document.title = 'Text-Utils Dark-mode';
    } else {
      setMode('light');
      setBodyMode('white');
      showAlert('Light mode is enabled', 'success');
      document.title = 'Text-Utils Light-mode';
    }
  };

  return (
    <BrowserRouter>
      <Nav {...navItems} mode={mode} switchMode={switchMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextArea {...textHeading} bodyMode={bodyMode} showAlert={showAlert} />} />
        <Route path="/text-util" element={<TextArea {...textHeading} bodyMode={bodyMode} showAlert={showAlert} />} />
        <Route path="/about-table" element={<Accordian />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
