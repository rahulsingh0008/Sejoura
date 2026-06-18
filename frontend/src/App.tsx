import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// import ComponentsDemo from "./pages/ComponentsDemo";

function App() {
  return (
    <Routes>
      {/* <Route
        path="/components-demo"
        element={<ComponentsDemo />}
      /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;