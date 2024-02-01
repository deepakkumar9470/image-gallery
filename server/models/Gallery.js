import mongoose from 'mongoose'

const GallerySchema = new mongoose.Schema({
  
    picture: {
        type: String,
        // validate: {
        //     validator: function(value) {
        //       return mongoose.Types.ObjectId.isValid(value);
        //     },
        //     message: props => `${props.value} is not a valid ObjectId!`,
        //   },
    }

},{timestamps : true})

const ImageGallery = mongoose.model.ImageGallery || mongoose.model('Gallery', GallerySchema)

export default ImageGallery