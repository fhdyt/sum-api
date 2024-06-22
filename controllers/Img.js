
const fs = require('fs');

const addImg = async (req, res) => {
    console.log(req.user)
    try {
        const files = req.files;
        const photos = [];

        res.status(200);
        res.json({ img: "uploads/" + files[0].filename })
    }
    catch (err) {
        console.log(err)
        res.json({ "error": err })
    }
}
const deleteImg = async (req, res) => {
    const file_name = req.params.id
    const filePath = `uploads/${file_name}`;
    try {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.status(404).json({ "error": "File not found" });
            } else {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ "error": "Failed to delete the file" });
                    } else {
                        res.status(200).json({ "status": true });
                    }
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": err });
    }
}

module.exports = {
    addImg,
    deleteImg
}