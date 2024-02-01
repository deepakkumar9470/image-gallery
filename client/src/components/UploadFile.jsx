import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../api/apiUrl";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [fileDisplay,setFileDisplay] = useState('')
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      dispatch(setError("Please select a file to upload."));
      return;
    }

    const formData = new FormData();
    formData.append("myimage", file);
    console.log(formData)

    try {
      const response = await axios.post(
        `${url}/uploadimage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center flex-col  my-20 py-10 bg-mainBg">
      <h2 className="text-4xl text-white font-bold mb-6">Image Gallery</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="w-full p-4 md:p-0 md:w-[600px] flex items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG orJPEG
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 mt-5 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
