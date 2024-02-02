import React, { useState, useEffect } from "react";
import view from "../assets/eye.svg";
import trash from "../assets/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { setImages, setError, deleteImage } from "../redux/imageSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { imgUrl, url } from "../api/apiUrl";
import Loader from "./Loader";

const Home = () => {
  const { images, error } = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/images`);
      dispatch(setImages(response.data.imageGalleries));
      setLoading(false);
    } catch (error) {
      dispatch(setError("Error fetching images. Please try again."));
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/image/${id}}`);
      fetchImages();
    } catch (error) {
      dispatch(setError("Error deleting image. Please try again."));
      console.error(error);
    }
  };

  if (loading) return <Loader />;
  return (
    <div className="grid sm:grid-cols-1 pl-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:pl-6 gap-4 mt-28 md:pl-4">
      {images?.length > 0 ? (
        images?.map((item, i) => (
          <div
            key={item.picture}
            className="w-full h-[400px]  pr-4 md:pr-0 md:w-[400px] md:h-[400px]
                       
                       rounded-md cursor-pointer shadow-[0 8px 32px 0 rgba( 31, 38, 135, 0.37 )] border-[1px solid rgba( 255, 255, 255, 0.18 )] filter-[blur(4px)]
                       hover:scale-110 transition-all duration-150 relative"
          >
            <img
              src={
                item.picture
                  ? `${imgUrl}/uploads/${item?.picture}`
                  : "https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="galleryimg"
              className="w-full h-full object-cover rounded-md"
            />

            <div className="flex items-end justify-end gap-2 absolute right-14 bottom-5">
              <Link>
                <img
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-150
                  bg-[white] rounded-md"
                  src={view}
                  alt="view"
                />
              </Link>

              <img
                className="w-6 h-6 cursor-pointer hover:scale-110 transition duration-150
                bg-[white] rounded-md"
                src={trash}
                alt="trash"
                onClick={() => handleDelete(item?._id)}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-3xl text-white text-center font-bold mt-10">
          No image data available , please upload first
        </p>
      )}
    </div>
  );
};

export default Home;
