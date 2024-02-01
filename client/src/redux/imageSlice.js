import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    error: null,
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    deleteImage : (state,action)=>{
      const {id}= action.payload;
       state.images = state.images.filter(item=>item.id !== id)
    }
  },
});

export const {setImages, setError,deleteImage } = imageSlice.actions;
export default imageSlice.reducer;