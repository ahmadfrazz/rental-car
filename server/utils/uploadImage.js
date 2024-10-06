const cloudinary = require("./cloudinary");

// const cloudinary = require('cloudinary').v2;

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) => {
            if(result && result.secure_url){
                return resolve(result.secure_url)
            }
            console.log('er---', error.message);
            reject({ message: error.message})
        })
    })
}

module.exports.uploadMultipleImages = (images) => {
    return new Promise((resolve, reject) => {
        const uploads = images.map((base) => uploadImage(base));
        Promise.all(uploads)
        .then(values => resolve(values))
        .catch(err => reject(err))
    })
}