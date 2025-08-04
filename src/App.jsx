import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout.jsx";
import Home from "./home/home.jsx";
import PropertiesList from "./propertiesList/propertiesList.jsx";
import Property from "./propertiesList/property.jsx";
import Contact from "./components/contact.jsx";
import Dashboard from './dashboard/dashboard.jsx'
import EditProperty from './dashboard/EditProperty.jsx'
import { LocationProvider } from "./context/LocationContext.jsx";
import AboutPage from "./about/aboutPage.jsx";
import Login from "./dashboard/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./dashboard/protectedRoute.jsx";




function App() {

  return (
  <>
  <BrowserRouter>
  <AuthProvider>
      <LocationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/properties-list/:country/:type" element={<PropertiesList />} />

            <Route path="/property/:id" element={<Property />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
            <Route path="/login" element={<Login/>}></Route>
         {/* Protected Route */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="edit/:id" element={<EditProperty />} />
        </Route>
        </Routes>
      </LocationProvider>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
