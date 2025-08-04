import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFormContext } from "react-hook-form"; // To share the same form instance

const DashboardSidebarMobile = ({ show, handleClose }) => {
  const { register, watch } = useFormContext(); // Use existing form context
  const selectedSection = watch("SectionBtn");

  const handleSelect = (value) => {
    // Programmatically set value (optional)
    document.querySelector(`input[value="${value}"]`)?.click();
    handleClose(); // Close offcanvas immediately after selection
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-greenCustom text-white">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-black font-bold text-xl">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="flex flex-col gap-4">
        {/* All Properties */}
        <label
          className={`flex items-center justify-start w-full h-[3rem] cursor-pointer text-[0.99rem] font-semibold px-4
          ${selectedSection === "AllProperties" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}
          onClick={() => handleSelect("AllProperties")}
        >
          <input
            type="radio"
            value="AllProperties"
            {...register("SectionBtn")}
            className="hidden"
          />
          All Properties
        </label>

        {/* Featured Properties */}
        <label
          className={`flex items-center justify-start w-full h-[3rem] cursor-pointer text-[0.99rem] font-semibold px-4
          ${selectedSection === "featuredProperties" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}
          onClick={() => handleSelect("featuredProperties")}
        >
          <input
            type="radio"
            value="featuredProperties"
            {...register("SectionBtn")}
            className="hidden"
          />
          Featured Properties
        </label>

        {/* Create Property */}
        <label
          className={`flex items-center justify-start w-full h-[3rem] cursor-pointer text-[0.99rem] font-semibold px-4
          ${selectedSection === "createProperty" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}
          onClick={() => handleSelect("createProperty")}
        >
          <input
            type="radio"
            value="createProperty"
            {...register("SectionBtn")}
            className="hidden"
          />
          Create Property
        </label>

        {/* Settings */}
        <label
          className={`flex items-center justify-start w-full h-[3rem] cursor-pointer text-[0.99rem] font-semibold px-4
          ${selectedSection === "settings" ? "bg-[linear-gradient(to_left,transparent,#F2F0EC)] text-black" : "bg-greenCustom text-white"}`}
          onClick={() => handleSelect("settings")}
        >
          <input
            type="radio"
            value="settings"
            {...register("SectionBtn")}
            className="hidden"
          />
          Settings
        </label>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DashboardSidebarMobile;
