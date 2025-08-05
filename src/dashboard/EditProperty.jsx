import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from "react-hook-form";
import { MapPin , PencilLine , CircleDollarSign , Grid2x2, Bed , Bath, User, Briefcase, Phone, MessageCircle   } from 'lucide-react';

import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import apiClient from './clientApi.js'


function editProperty() {
  
  const params = useParams()
  const {id} = params

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting  },
      reset 
    } = useForm(
      {
        defaultValues: {
  
    }
      }
    );
  
const [images, setImages] = useState([]);            // Existing images from backend
const [newImagePreviews, setNewImagePreviews] = useState([]); // Only for new uploaded images
const [newImages, setNewImages] = useState([]);     // Actual new files
const [deletedImages, setDeletedImages] = useState([]); // Store removed existing images
  const [propertyPreviewData, setpropertyPreviewData] = useState(null)
 
const [agentImg, setAgentImg] = useState({
    image: propertyPreviewData?.agent?.image || null,
    removedImage: null,
    newImage: null,
  });


  useEffect(() => {
  if (propertyPreviewData) {
    setAgentImg({
      image: propertyPreviewData?.agent?.image,
      removedImage: null,
      newImage: null,
    });
  }
}, [propertyPreviewData]);


  useEffect(()=> {
    console.log(propertyPreviewData)
  },[propertyPreviewData])

  // Remove image
  const handleRemoveAgentImage = () => {
    setAgentImg((prev) => ({
      ...prev,
      removedImage: prev.image, // Keep old image URL
      image: null, // Remove from UI
    }));
  };

  // Add new image
  const handleNewAgentImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAgentImg((prev) => ({
        ...prev,
        newImage: file, // Store new file
      }));
    }
  };
 

  
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState(null);



    useEffect(()=> {

      const featchData = async()=> {
          try {
            const res = await apiClient.get(`https://blackwood-backend-production.up.railway.app/dashboard/edit/${id}`)

            const result = await res.data;
            setpropertyPreviewData(result)
              setImages(result.images || []);


            
            console.log(result)
    
          } catch (error) {

            console.error("Upload failed", error);
     
            
          }
      }

      featchData()
    },[params ])


    useEffect(() => {
    if (propertyPreviewData) {
      reset({
        title: propertyPreviewData.title || "",
        price: propertyPreviewData.price || "",
        location: propertyPreviewData.location || "",
        city: propertyPreviewData.city || "",
        bedrooms: propertyPreviewData.details.bedrooms || '',
        bathrooms: propertyPreviewData.details.bathrooms || '',
        status: propertyPreviewData.details.status || '',
        size: propertyPreviewData.details.size || '',
        sizeType: propertyPreviewData.details.sizeType || '',
        description: propertyPreviewData.details.sizeType || '',
        featured: propertyPreviewData.details.isFeatured || false,
        agentname: propertyPreviewData?.agent?.name || '',
        agentposition: propertyPreviewData?.agent?.position || '',
        phonenumber: propertyPreviewData?.agent?.phone || '',
        whatsapp: propertyPreviewData?.agent?.whatsapp || '',

        // Add other fields here
      });
    }
  }, [propertyPreviewData]);

  const handleRemoveImage = (src) => {
  setImages((prev) => prev.filter(img => img !== src));
  setDeletedImages((prev) => [...prev, src]);
};


  useEffect(()=> {
    console.log("images", images)
    console.log("DeletedImages", deletedImages)
  }, [images, deletedImages])

  const selectedStatus = watch("status");
  const isFeatured = watch("featured");

  

      const [notification, setNotification] = useState({
      show: false,
      message: '',
      type: '' // success or error
    });
    


  const navigate = useNavigate()

  const handleClose = ()=> {
          navigate(-1);

  }

    const onSubmit = async (data) => {
      console.log("I ran")
          setFormData(data);
              setShowConfirm(true);

    }

    const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  const previews = files.map(file => URL.createObjectURL(file));

  setNewImages((prev) => [...prev, ...files]);
  setNewImagePreviews((prev) => [...prev, ...previews]);
};

const handleRemoveNewImage = (index) => {
  const updatedPreviews = [...newImagePreviews];
  updatedPreviews.splice(index, 1);

  const updatedFiles = [...newImages];
  updatedFiles.splice(index, 1);

  setNewImagePreviews(updatedPreviews);
  setNewImages(updatedFiles);
};

const handleConfirmYes = async () => {
  try {
    const payload = {
      ...formData,
      sameAsOld: images,
      deletedImages: deletedImages,
      newImages: newImages,
      agent: {
        image: agentImg.image,        // Current agent image (if exists)
        removedImage: agentImg.removedImage, // Removed agent image URL
        newImage: agentImg.newImage   // File for upload
      }
    };

    console.log("Sending data:", {
      ...payload,
      newImages: newImages.map(file => file.name),
      agent: {
        image: agentImg.image,
        removedImage: agentImg.removedImage,
        newImage: agentImg.newImage ? agentImg.newImage.name : null
      }
    });

    const formPayload = new FormData();

    // Append ALL formData fields (like title, price, etc.)
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    // Append our extra image fields
    formPayload.append("sameAsOld", JSON.stringify(payload.sameAsOld));
    formPayload.append("deletedImages", JSON.stringify(payload.deletedImages));

    newImages.forEach((file) => {
      formPayload.append("newImages", file);
    });

    if (agentImg.removedImage) {
      formPayload.append("agentRemovedImage", agentImg.removedImage);
    }
    if (agentImg.newImage) {
      formPayload.append("agentNewImage", agentImg.newImage);
    }
    if (agentImg.image) {
      formPayload.append("agentOldImage", agentImg.image);
    }

    const res = await apiClient.put(
      `https://blackwood-backend-production.up.railway.app/dashboard/edit/${id}`,
      formPayload,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    console.log("Data sent:", res.data);
    setShowConfirm(false);
    alert("File updated successfully!");
    reset()

  } catch (error) {
    console.error("Error preparing data:", error);
  }
};



  const handleConfirmNo = () => {
    setShowConfirm(false);
  };
  
 

  return (
    <div className='min-h-screen w-full bg-black/60 absolute top-0 z-50 overflow-y-auto'>
      <div className="container bg-lightWhite w-full h-full overflow-y-auto">
        <div className='flex justify-between  items-center pt-2 border-b-2 pb-2'>
          <span className='text-xl font-semibold'>Edit</span>
              <span className='cursor-pointer' onClick={ handleClose}><X /></span>
        </div>

        {notification.show && (
  <div className={`alert alert-${notification.type} mt-3`} role="alert">
    <span className="font-bold">{notification.message}</span>
  </div>
)}
      {propertyPreviewData && (
         <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-black mt-[2rem]"
      > 
      <div className="flex flex-col lg:flex-row gap-4 justify-between ">
      
    <div className="flex gap-4 mb-4  p-2 rounded-sm  w-[100%] lg:w-[20%] ">
  <label className={`flex items-center justify-center w-[7rem] h-[3rem] rounded cursor-pointer 
    ${selectedStatus === "buy" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"}`}>
    <input
      type="radio"
      value="buy"
      {...register("status", { required: true })}
     className="hidden"/>
     Buy
  </label>

  <label className={`flex items-center justify-center w-[7rem] h-[3rem] rounded cursor-pointer 
    ${selectedStatus === "rent" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"}`}>
    <input
      type="radio"
      value="rent"
      {...register("status", { required: true })}
    className="hidden"/>
    Rent
  </label>
    </div>
    

   
    
    </div>
    

       <div className="flex flex-col lg:flex-row    items-center justify-start gap-3 mb-4">
        <div className="flex flex-col w-[100%] lg:w-[50%]  h-[3rem] lg:min-h-[3rem]">

        <div className="flex flex-col gap-1 items-start h-full relative">
          <input
            {...register("title", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="Title"
          />
          <PencilLine  className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.title && <span className="text-red-600">This field is required</span>}
            </div>

        <div className="flex flex-col w-[100%] lg:w-[25%]  h-[3rem] lg:min-h-[3rem]">
        <div className="flex flex-col gap-1 items-start relative h-full ">
          <input
            {...register("city", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm pl-[2rem]"
            placeholder="City"
          />
          <MapPin className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.city && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="flex flex-col w-[100%] lg:w-[25%]  h-[3rem] lg:min-h-[3rem]">
        <div className="flex flex-col gap-1 items-start relative h-full ">
          <input
            {...register("location", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm pl-[2rem]"
            placeholder="Location"
          />
          <MapPin className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.location && <span className="text-red-600">This field is required</span>}
        </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-3 items-start mb-4">
        <div className="flex flex-col gap-1 w-[100%] lg:w-[25%]  relative h-[3rem] lg:h-[3rem]">
        <div className="flex flex-col gap-1 items-start h-full">
          <input
          type="number"
            {...register("price", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="Price"
          />
          <CircleDollarSign  className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.price && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="flex flex-col lg:flex-row gap-3 w-[100%] lg:w-[25%]">
        <div className="flex flex-col gap-1 w-[100%] lg:w-[50%]  relative h-[3rem] lg:h-[3rem]">
        <div className="flex flex-col gap-1 items-start h-full">
          <input
          type="number"
            {...register("size", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="Size"
          />
          <Grid2x2   className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.size && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="flex flex-col gap-1 w-[100%] lg:w-[50%]  relative h-[3rem] lg:h-[3rem]">
        <div className="flex flex-col gap-1 items-start h-full">
          <input
          type="text"
            {...register("sizeType", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="SizeType"
          />
          <Grid2x2   className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.sizeType && <span className="text-red-600">This field is required</span>}
        </div>
        </div>
            <div className="flex flex-col gap-1 w-[100%] lg:w-[25%]  relative h-[3rem] lg:h-[3rem]">
        <div className="flex flex-col gap-1 items-start h-full">
          <input
          type="number"
            {...register("bedrooms", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="Bedrooms"
          />
          <Bed    className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.bedrooms && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="flex flex-col gap-1 w-[100%] lg:w-[25%]  relative h-[3rem] lg:h-[3rem]">
        <div className="flex flex-col gap-1 items-start h-full">
          <input
          type="number"
            {...register("bathrooms", { required: true })}
            className="w-full h-full bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm !pl-[2rem]"
            placeholder="Bathrooms"
          />
          <Bath    className="absolute left-2 top-1/2 -translate-y-1/2" size={18} color="#3C7460"/>
        </div>
        {errors.bathrooms && <span className="text-red-600">This field is required</span>}
        </div>

        </div>

        
        <div >
            <textarea {...register("description", { required: true })} className="h-[8rem] w-[100%] bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm pl-[2rem]" placeholder="Description"></textarea>
            {errors.description && <span className="text-red-600">This field is required</span>}

        </div>


        <div className="flex flex-col items-start gap-4 mt-2">
          <input
  type="file"
  {...register("images", {

    validate: {
      checkImages: (files) => {
        // Convert FileList to Array
        const fileList = Array.from(files);
        // Check all files
        const allAreImages = fileList.every(file => file.type.startsWith("image/"));
        return allAreImages || "Only image files are allowed";
      }
    }
  })}
  multiple
  accept="image/*"
  onChange={(e) => {
    handleImageChange(e);
  }}
/>
 <div className="flex  gap-4 mb-4  ">
  <label className={`flex items-center justify-center min-w-[7rem] h-[3rem] rounded cursor-pointer  p-4
    ${isFeatured === "true" ? "bg-greenCustom text-white" : "bg-[#686868] text-white"}`}>
    <input
      type="checkbox"
      value="true"
      {...register("featured")}
     className="hidden"/>
     Add To Featured List!!
  </label>

 
    </div>

{errors.images && (
  <span className="text-red-600">{errors.images.message}</span>
)}

      {/* Existing images preview */}
{images.length > 0 && (
  <div>
    <h4 className="font-medium">Existing Images</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {images.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`preview ${index}`}
            className="w-20 h-20 object-cover rounded border"
          />
          <button
            type="button"
            onClick={() => handleRemoveImage(src)}
            className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
)}

{/* New images preview */}
{newImagePreviews.length > 0 && (
  <div>
    <h4 className="font-medium mt-4">New Uploaded Images</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {newImagePreviews.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`new preview ${index}`}
            className="w-20 h-20 object-cover rounded border"
          />
          <button
            type="button"
            onClick={() => handleRemoveNewImage(index)}
            className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
)}

      

        </div>

        
      {/* ✅ Dubai Extra Inputs */}
          {propertyPreviewData?.country === "dubai" && (
  <div className="p-4 border-2 border-dotted border-[#3838388f] rounded-md space-y-4 animate-fade-in mt-[1rem]">
    {/* Row 1: Agent Name & Agent Position */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Agent Name */}
      <div className="relative w-full">
        <User className="absolute left-3 top-3 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Agent Name"
          {...register("agentname", { required: "Agent name is required" })}
          className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm"
        />
        {errors.agentname && (
          <p className="text-red-500 text-sm mt-1">
            {errors.agentname.message}
          </p>
        )}
      </div>

      {/* Agent Position */}
      <div className="relative w-full">
        <Briefcase
          className="absolute left-3 top-3 text-gray-500"
          size={18}
        />
        <input
          type="text"
          placeholder="Agent Position"
          {...register("agentposition", {
            required: "Agent position is required",
          })}
          className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm"
        />
        {errors.agentposition && (
          <p className="text-red-500 text-sm mt-1">
            {errors.agentposition.message}
          </p>
        )}
      </div>
    </div>

    {/* Row 2: Phone Number & WhatsApp */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Phone Number */}
      <div className="relative w-full">
        <Phone
          className="absolute left-3 top-3 text-gray-500"
          size={18}
        />
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phonenumber", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numbers allowed",
            },
          })}
          className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm"
        />
        {errors.phonenumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phonenumber.message}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div className="relative w-full">
        <MessageCircle
          className="absolute left-3 top-3 text-gray-500"
          size={18}
        />
        <input
          type="text"
          placeholder="WhatsApp Number"
          {...register("whatsapp", {
            required: "WhatsApp number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numbers allowed",
            },
          })}
          className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm"
        />
        {errors.whatsapp && (
          <p className="text-red-500 text-sm mt-1">
            {errors.whatsapp.message}
          </p>
        )}
      </div>
    </div>

    {/* test */}

    <div className="flex flex-col items-center gap-4 border p-4 rounded-md bg-gray-100">
      <h3 className="text-lg font-bold">Agent Image</h3>

      {/* Current image */}
      {agentImg.image && (
        <div className="relative">
          <img
            src={agentImg.image}
            alt="Agent"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <button
            onClick={handleRemoveAgentImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      )}

      {/* Upload new image if old removed */}
      {!agentImg.image && (
        <div>
          <input
  type="file"
  accept="image/*"
  {...register("agentImage", {
    required: !agentImg.image ? "Agent image is required" : false,
    validate: {
      isImage: (files) =>
        files && files[0] && files[0].type.startsWith("image/")
          ? true
          : "File must be an image",
    },
  })}
  onChange={(e) => handleNewAgentImage(e)}
/>

{/* Show validation errors */}
{errors.agentImage && (
  <p className="text-red-500 text-sm mt-1">{errors.agentImage.message}</p>
)}
          {agentImg.newImage && (
            <p className="text-green-600 text-sm mt-2">
              New Image: {agentImg.newImage.name}
            </p>
          )}
        </div>
      )}

      {/* Debug info */}
      <div className="mt-4 text-xs text-gray-600">
        <p>Removed Image: {agentImg.removedImage || "None"}</p>
        <p>New Image: {agentImg.newImage ? agentImg.newImage.name : "None"}</p>
      </div>
    </div>

    {/* ✅ Row 3: Image Upload */}
    {/* <div className="flex flex-col">
      <label className="font-medium mb-2 text-gray-700">Upload Agent Image</label>
      <input
        type="file"
        accept="image/*"
        {...register("agentimage", {
          required: "Agent image is required",
          validate: {
            isImage: (fileList) => {
              if (fileList.length === 0) return "Please upload an image";
              const file = fileList[0];
              return file && file.type.startsWith("image/")
                ? true
                : "File must be an image";
            },
          },
        })}
        className="block w-full text-gray-500 border-2 border-[#3838388f] rounded-sm p-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#0D8755] file:text-white hover:file:bg-[#0b6c45] focus:outline-none"
      />
      {errors.agentimage && (
        <p className="text-red-500 text-sm mt-1">
          {errors.agentimage.message}
        </p>
      )}
    </div> */}
  </div>
          )}
        
        <input type="submit"   disabled={isSubmitting} className="h-[4rem] w-[14rem] bg-greenCustom border-2 border-white text-white disabled:bg-gray-400 disabled:cursor-not-allowed" />
      </form>

      )}


      
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow p-5 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to edit this file?</h2>
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
                Yes, Edit
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default editProperty