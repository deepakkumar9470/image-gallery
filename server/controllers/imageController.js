import ImageGallery from '../models/Gallery.js'
import path from 'path'
const __dirname = path.resolve();
import fs from 'fs'
export const addImage = async (req, res) => {
    const file = req.file.filename;

    if (!file) {
        res.status(204).json('Please upload file')
    }

    try {
        const newImage = await new ImageGallery({
            picture: file,
        })
        await newImage.save()
        res.status(201).send({
            status: true,
            newImage,
            imageUrl: `/uploads/${req.file.filename}`,
            message: 'Image added successfully'
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllImages = async (req, res) => {

    try {
        const imageGalleries = await ImageGallery.find({}).sort({ createdAt: -1 });
        res.status(200).send({ imageGalleries });
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getSingleImage = async (req, res) => {
    try {
        const imgGal = await ImageGallery.findById(req.params.id)

        if (!imgGal) {
            res.status(404).send({ error: 'Image not found.' });
            return;
        }
        res.status(200).send(imgGal)
    } catch (error) {
        res.status(500).send(error);
    }
}


export const deleteImage = async (req, res) => {
    try {
        const image = await ImageGallery.findByIdAndDelete(req.params.id)
        if (!image) {
            res.status(404).send({ error: 'Image not found.' });
            return;
        }
        // fs.unlink(path.join(__dirname, 'uploads', path.basename(image.picture)));
        res.send({ message: 'Image deleted successfully.' });
    }

    catch (error) {
        res.status(500).send({ error: 'Error deleting image. Please try again.' });
    }
}




