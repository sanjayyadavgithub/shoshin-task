import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './component/Service';
import ServiceDetails from './component/ServiceDetails';
import Booking from './component/Booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Service />}>
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
