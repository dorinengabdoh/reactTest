import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Location from "./page/location/location";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-auto">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <div className="md:px-24 md:py-8">
                  <Dashboard />
                </div>
              }
            />
            <Route
              path="/location"
              element={
                <div className="md:px-24 md:py-8">
                  <Location />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
