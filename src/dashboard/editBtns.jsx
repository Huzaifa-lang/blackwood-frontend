import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import apiClient from './clientApi.js'

function EditBtns({editOptions, itemId}) {
      const showEditOptions = editOptions ?? false;
      const [showConfirm, setShowConfirm] = useState(false);

      const [msg, setMsg] = useState({ text: "", type: "" }); // type: 'success' or 'error'



   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate()

    const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigation = (page) => {
  if (page === 'view') {
    navigate(`/property/${itemId}`);
  } else if (page === 'edit') {
    navigate(`/dashboard/edit/${itemId}`);
  } else if (page === 'delete') {
    setShowConfirm(true);
  }
};

const handleConfirmYes = async () => {
  try {
    // 🔥 Call your backend delete API here
   const res = await apiClient.delete(`http://localhost:5000/dashboard/delete/${itemId}`);
    setShowConfirm(false);

    if (res.status === 200) {
        setMsg({ text: res.data.message || "Deleted successfully!", type: "success" });
        setTimeout(() => {
    window.location.reload();
    }, 1000);
      }
    // Optionally: refresh page, navigate away, or show success toast
  } catch (error) {
    console.error("Error deleting:", error);
          setMsg({ text: err.response?.data?.message || "Something went wrong", type: "error" });

  }
};

const handleConfirmNo = () => {
  setShowConfirm(false);
};
  return (
    <> 

    {/* Message Box */}
      {msg.text && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white font-semibold z-50 ${
            msg.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {msg.text}
        </div>
      )}

    <div className="flex w-full items-end justify-end pr-4 pt-2 relative">
      {editOptions && (
        <>
          <button
            onClick={toggleOptions}
            className="bg-greenCustom flex justify-center min-w-[5rem] rounded-sm px-3 py-1 transition duration-200 hover:opacity-90"
          >
            <span className="text-[0.99rem] text-white font-medium">Edit</span>
          </button>

          {/* Options dropdown */}
          {isOpen && (
            <div
              className="absolute top-full mt-2 right-4 bg-white border border-gray-200 rounded shadow-lg min-w-[8rem] transition-all duration-300 ease-in-out z-10"
            >
              <ul className="flex flex-col  m-0 p-0">

                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={()=> handleNavigation("edit")}>Edit Property</li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={()=> handleNavigation("delete")}>Delete Property</li>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={()=> handleNavigation("view")}>View Details</li>
              </ul>
            </div>

            
          )}

          {showConfirm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded shadow p-5 w-[90%] max-w-md">
      <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this property?</h2>
      <div className="flex justify-end gap-3">
        <button
          onClick={handleConfirmNo}
          className="btn btn-secondary"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirmYes}
          className="btn btn-danger"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
)}
        </>
      )}
    </div>

    </>
  )
}

export default EditBtns