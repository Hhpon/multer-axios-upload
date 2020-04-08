const express = require('express')
const app = express()
const multer = require('multer')
const cors = require('cors')

const upload = multer({ dest: 'upload' })
app.use(cors())

app.post('/upload', upload.single('filea'), function (req, res) {
    console.log(req.file);
    res.send('ok')
})

app.listen(3000, () => {
    console.log('port on 3000');
})