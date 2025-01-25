const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

app.post('/submit', upload.single('userImage'), (req, res) => {
    const { fullName, email, phone, address, education, experience, skills } = req.body;
    const userImage = req.file;

    if (userImage) {
        console.log('Image uploaded:', userImage.filename);
    }

    const formData = {
        fullName,
        email,
        phone,
        address,
        education,
        experience,
        skills,
        imagePath: userImage ? `/uploads/${userImage.filename}` : null,
    };

    console.log('Form Data:', formData);

    res.json({
        message: 'Form submitted successfully!',
        data: formData,
    });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
