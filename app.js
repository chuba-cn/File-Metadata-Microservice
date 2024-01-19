const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const path = require('path');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  try{
    const response = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    }
    res.status(201).json(response);
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
