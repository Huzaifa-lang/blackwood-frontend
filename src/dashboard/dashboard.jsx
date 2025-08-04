import React, { useState } from "react";
import { Settings , Menu } from "lucide-react";
import CreatePropertyDashboard from "./createPropertyDashboard.jsx";
import { FormProvider, useForm } from "react-hook-form";
import AllPropertiesDashboard from "./allPropertiesDashboard.jsx";
import FeaturedPropertiesDashboard from "./featuredPropertiesDashboard.jsx";
import { Outlet } from "react-router";
import {  Button , Modal} from "react-bootstrap";
import DashboardSidebarMobile from './dashboardSidebarMobile.jsx'


import { signOut } from "firebase/auth";
import { auth } from "../dashboard/Firebase"; // Your Firebase auth instance




function Dashboard() {
 const methods = useForm({
  defaultValues: {
    SectionBtn: "AllProperties"
  }
});

const { watch, register } = methods; // You can still extract watch for local use

      const selectedSection = watch("SectionBtn");
      const [showSidebar, setShowSidebar] = useState(false);

        const [showLogoutModal, setShowLogoutModal] = useState(false);

      const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowLogoutModal(false);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };




  return (
    <>
     <FormProvider {...methods}>
    <section className="">
      <nav className=" h-[4rem] bg-greenCustom">
        <div className="!h-full flex items-center justify-between p-4">
          <img src="\logo-white.svg" alt="" className="h-4 cursor-pointer" />
          <div className="flex items-center gap-4">
        {/* Settings Icon with Tooltip */}
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Logout"
          onClick={() => setShowLogoutModal(true)}
          className="cursor-pointer"
        >
          <Settings color="#F0F0F0" size={24} />
        </div>

        {/* Mobile Sidebar Toggle */}
        <button
          className="lg:hidden p-2 bg-greenCustom text-white"
          onClick={() => setShowSidebar(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Yes, Logout
          </Button>
        </Modal.Footer>
      </Modal>
          
        </div>
      </nav>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="hidden lg:flex flex-col col-span-2 bg-greenCustom text-black justify-start gap-4  ">
          <label className={`flex items-center justify-start w-[100%] h-[3rem]  cursor-pointer text-[0.99rem] font-semibold mt-[1rem] pl-4
    ${selectedSection === "AllProperties" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}>
    <input
      type="radio"
      value="AllProperties"
      {...register("SectionBtn", { required: true })}
     className="hidden"/>
    All Properties
  </label>

  <label className={`flex items-center justify-start w-[100%] h-[3rem]  cursor-pointer text-[0.99rem] font-semibold  pl-4 
    ${selectedSection === "featuredProperties" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}>
    <input
      type="radio"
      value="featuredProperties"
      {...register("SectionBtn", { required: true })}
     className="hidden"/>
    Featured Properties
  </label>
          <label className={`flex items-center justify-start w-[100%] h-[3rem] rounded-sm cursor-pointer text-[0.99rem] font-semibold  pl-4 
    ${selectedSection === "createProperty" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}>
    <input
      type="radio"
      value="createProperty"
      {...register("SectionBtn", { required: true })}
     className="hidden"/>
    Create Property
  </label>
          <label className={`flex items-center justify-start w-[100%] h-[3rem] rounded-sm cursor-pointer text-[0.99rem] font-semibold  pl-4 
    ${selectedSection === "settings" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom] text-white"}`}>
    <input
      type="radio"
      value="settings"
      {...register("SectionBtn", { required: true })}
     className="hidden"/>
    Settings
  </label>
        </div>

        <DashboardSidebarMobile
  show={showSidebar} handleClose={() => setShowSidebar(false)}
 
/>

        <div className="col-span-12  lg:col-span-10 bg-lightWhite ">
          <div className="container">
          {selectedSection === 'AllProperties' && <AllPropertiesDashboard/>}
          {selectedSection === 'createProperty' && <CreatePropertyDashboard/>}
          {selectedSection === 'featuredProperties' && <FeaturedPropertiesDashboard/>}
          </div>
        </div>
      </div>
    </section>
    </FormProvider>
    <Outlet /> 
    </>
  );
}

export default Dashboard;
