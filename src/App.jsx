import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProperties from "./pages/AdminProperties";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import AdminBookings from "./pages/AdminBookings";
import AdminContacts from "./pages/AdminContacts";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/properties"
          element={
            <ProtectedRoute>
              <AdminProperties />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-property/:id"
          element={
            <ProtectedRoute>
              <EditProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contact"
          element={
            <ProtectedRoute>
              <AdminContacts />
            </ProtectedRoute>
          }
        />
      </Routes>

      <WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
