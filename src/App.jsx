import { useState } from "react";
import Accordian from "./components/Accordian";
import Nav from "./components/Nav";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- changed
import NoPage from "./components/NoPage";

const App = () => {
  let navItems = {
    item1: 'home',
    item2: 'Text-Utils',
    item3: 'About-Table',
  };

  let textHeading = {
    heading: 'This is Text Area',
  };

  const [mode, setMode] = useState('dark');
  const [bodyMode, setBodyMode] = useState('#1c0238');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };

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
    <HashRouter> {/* <-- changed */}
      <Nav {...navItems} mode={mode} switchMode={switchMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextArea {...textHeading} bodyMode={bodyMode} showAlert={showAlert} />} />
        <Route path="/text-util" element={<TextArea {...textHeading} bodyMode={bodyMode} showAlert={showAlert} />} />
        <Route path="/about-table" element={<Accordian />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;