import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin , PencilLine , CircleDollarSign , Grid2x2, Bed , Bath, User, Briefcase, Phone, MessageCircle   } from 'lucide-react';
import axios from "axios";
import apiClient from './clientApi.js'

function CreatePropertyDashboard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting  },
    reset 
  } = useForm(
    {
      defaultValues: {
    country: "pakistan",
    status: "buy"

  }
    }
  );
  const [imagePreviews, setImagePreviews] = useState([]);

  const selectedLocation = watch("country");
  const selectedStatus = watch("status");
  const isFeatured = watch("featured");

  const [notification, setNotification] = useState({
  show: false,
  message: '',
  type: '' // success or error
});


  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  const previews = files.map(file => URL.createObjectURL(file));

  setImagePreviews(previews);
};


  const onSubmit = async (data) => {
  console.log("Data object:", data);

  // Check images
  Array.from(data.images).forEach(file => {
    if (!file.type.startsWith("image/")) {
      return;
    }
  });

  // Create FormData
  const formData = new FormData();

  // Append images
  for (let i = 0; i < data.images.length; i++) {
    formData.append("images", data.images[i]);
  }

 // Append other property fields
for (const key in data) {
  if (key === "images" || key === "agentimage") continue;
  formData.append(key, data[key]);
}

// ✅ If location is "dubai", append agent details
if (selectedLocation === "dubai") {
  // ✅ Append agent image (only one file)
  if (data.agentimage && data.agentimage.length > 0) {
    formData.append("agentimage", data.agentimage[0]);
  }

  // ✅ Append other agent fields (normalize values)
  const agentFields = ["agentname", "agentposition", "phonenumber", "whatsapp"];
  agentFields.forEach((field) => {
    if (data[field]) {
      const value = Array.isArray(data[field]) ? data[field][0] : data[field];
      formData.append(field, value.trim()); // ✅ Also trim whitespace
    }
  });
}

//  sending data

// Log all FormData key-value pairs


try {
   const res = await apiClient.post(
      'https://blackwood-backend-production.up.railway.app/dashboard/create',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data' // Crucial header
        }
      }
    );
  const result = await res.data;
    setNotification({
    show: true,
    message: result.message,
    type: 'success'
  });

  // reset()


} catch (error) {
      console.error("Upload failed", error);
      setNotification({
    show: true,
    message: 'Upload failed!',
    type: 'danger'
  });

}


  
};



  return (
    <div>
      {notification.show && (
  <div className={`alert alert-${notification.type} mt-3`} role="alert">
    <span className="font-bold">{notification.message}</span>
  </div>
)}

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
    <div className="flex gap-4 mb-4  p-2 rounded-sm  w-[100%] lg:w-[20%] ">
  <label className={`flex items-center justify-center w-[7rem] h-[3rem] rounded cursor-pointer 
    ${selectedLocation === "pakistan" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"}`}>
    <input
      type="radio"
      value="pakistan"
      {...register("country", { required: true })}
     className="hidden"/>
    Pakistan
  </label>

  <label className={`flex items-center justify-center w-[7rem] h-[3rem] rounded cursor-pointer border 
    ${selectedLocation === "dubai" ? "bg-[#0D8755] text-white" : "bg-[#E3E3E3] text-black"}`}>
    <input
      type="radio"
      value="dubai"
      {...register("country", { required: true })}
    className="hidden"/>
    Dubai
  </label>
    </div>

   
    
    </div>
       <div className="flex flex-col lg:flex-row items-center justify-start gap-3 mb-4">
        {/* Title */}
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="relative w-full">
            <PencilLine
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full h-[3rem] bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm pl-10"
              placeholder="Title"
            />
          </div>
          {errors.title && (
            <span className="text-red-600 text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="relative w-full">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              {...register("city", { required: "City is required" })}
              className="w-full h-[3rem] bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm pl-10"
              placeholder="City"
            />
          </div>
          {errors.city && (
            <span className="text-red-600 text-sm mt-1">
              {errors.city.message}
            </span>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="relative w-full">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              {...register("location", { required: "Location is required" })}
              className="w-full h-[3rem] bg-transparent border-2 border-[#3838388f] focus:outline-none focus:border-green-500 rounded-sm pl-10"
              placeholder="Location"
            />
          </div>
          {errors.location && (
            <span className="text-red-600 text-sm mt-1">
              {errors.location.message}
            </span>
          )}
        </div>
      </div>

       {/* <div className="flex flex-col lg:flex-row    items-center justify-start gap-3 mb-4">
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

        </div> */}

        {/* <div className="flex flex-col lg:flex-row gap-3 items-start mb-4">
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

        </div> */}

        <div className="flex flex-col lg:flex-row gap-3 items-start mb-4 flex-wrap">
        {/* Price */}
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="relative w-full">
            <CircleDollarSign
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              placeholder="Price"
              className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] rounded-sm focus:outline-none focus:border-green-500"
            />
          </div>
          {errors.price && (
            <span className="text-red-600 text-sm mt-1">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Size & Size Type */}
        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-1/4">
          {/* Size */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="relative w-full">
              <Grid2x2
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
                size={18}
              />
              <input
                type="number"
                {...register("size", { required: "Size is required" })}
                placeholder="Size"
                className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] rounded-sm focus:outline-none focus:border-green-500"
              />
            </div>
            {errors.size && (
              <span className="text-red-600 text-sm mt-1">
                {errors.size.message}
              </span>
            )}
          </div>

          {/* Size Type */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="relative w-full">
              <Grid2x2
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
                size={18}
              />
              <input
                type="text"
                {...register("sizeType", {
                  required: "Size type is required",
                })}
                placeholder="Size Type"
                className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] rounded-sm focus:outline-none focus:border-green-500"
              />
            </div>
            {errors.sizeType && (
              <span className="text-red-600 text-sm mt-1">
                {errors.sizeType.message}
              </span>
            )}
          </div>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="relative w-full">
            <Bed
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              type="number"
              {...register("bedrooms", { required: "Bedrooms are required" })}
              placeholder="Bedrooms"
              className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] rounded-sm focus:outline-none focus:border-green-500"
            />
          </div>
          {errors.bedrooms && (
            <span className="text-red-600 text-sm mt-1">
              {errors.bedrooms.message}
            </span>
          )}
        </div>

        {/* Bathrooms */}
        <div className="flex flex-col w-full lg:w-1/4">
          <div className="relative w-full">
            <Bath
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3C7460]"
              size={18}
            />
            <input
              type="number"
              {...register("bathrooms", {
                required: "Bathrooms are required",
              })}
              placeholder="Bathrooms"
              className="w-full h-[3rem] pl-10 bg-transparent border-2 border-[#3838388f] rounded-sm focus:outline-none focus:border-green-500"
            />
          </div>
          {errors.bathrooms && (
            <span className="text-red-600 text-sm mt-1">
              {errors.bathrooms.message}
            </span>
          )}
        </div>
      </div>

        
        <div >
            <textarea {...register("description", { required: true })} className="h-[8rem] w-[100%] bg-transparent border-2 border-[#3838388f] focus:outline-none rounded-sm pl-[2rem]" placeholder="Description"></textarea>
            {errors.description && <span className="text-red-600">This field is required</span>}

        </div>

        {/* <div className="flex flex-col items-start gap-4 mt-2">
          <input
  type="file"
  {...register("images", {
    required: "Please select images",
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

        {imagePreviews.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
  {imagePreviews.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`preview ${index}`}
      className="w-20 h-20 object-cover rounded border"
    />
  ))}
</div>

        )}
        </div> */}

        <div className="flex flex-col gap-4 mt-4">
  {/* Label */}
  {/* <label className="font-medium text-gray-700">Upload Property Images</label> */}

  {/* File Input */}
  <input
    type="file"
    {...register("images", {
      required: "Please select images",
      validate: {
        checkImages: (files) => {
          const fileList = Array.from(files);
          const allAreImages = fileList.every((file) =>
            file.type.startsWith("image/")
          );
          return allAreImages || "Only image files are allowed";
        },
      },
    })}
    multiple
    accept="image/*"
    onChange={(e) => {
      handleImageChange(e);
    }}
    className="block w-full text-gray-500 border-2 border-[#3838388f] rounded-sm p-2 
               file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 
               file:bg-[#0D8755] file:text-white hover:file:bg-[#0b6c45] 
               focus:outline-none"
  />

  {/* Error Message */}
  {errors.images && (
    <span className="text-red-600">{errors.images.message}</span>
  )}

  {/* Featured Checkbox */}
  <div className="flex gap-4 mt-2">
    <label
      className={`flex items-center justify-center min-w-[12rem] h-[3rem] rounded cursor-pointer px-4 font-semibold
      ${isFeatured === "true" ? "bg-greenCustom text-white" : "bg-[#686868] text-white"}`}
    >
      <input
        type="checkbox"
        value="true"
        {...register("featured")}
        className="hidden"
      />
      Add To Featured List!!
    </label>
  </div>

  {/* Image Previews */}
  {imagePreviews.length > 0 && (
    <div className="flex flex-wrap gap-3 mt-3">
      {imagePreviews.map((src, index) => (
        <div key={index} className="relative">
          <img
            src={src}
            alt={`preview ${index}`}
            className="w-20 h-20 object-cover rounded border-2 border-gray-300"
          />
        </div>
      ))}
    </div>
  )}
</div>

          {/* ✅ Dubai Extra Inputs */}
          {selectedLocation === "dubai" && (
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

    {/* ✅ Row 3: Image Upload */}
    <div className="flex flex-col">
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
    </div>
  </div>
          )}

   

        <input type="submit"   disabled={isSubmitting} className="h-[4rem] w-[14rem] bg-greenCustom border-2 border-white text-white disabled:bg-gray-400 disabled:cursor-not-allowed mt-[3rem]" />
      </form>
    </div>
  );
}

export default CreatePropertyDashboard;
