//imports default
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const port = 8080;

server.use(cors({ exposedHeaders: 'total' }));
//api call
const authApi = require('./routes/Auth');
const contactApi = require('./routes/Contact');
const subCategorieApi = require('./routes/SubCategorie');
const locationApi = require('./routes/Location');
const salaryApi = require('./routes/Salary');
const workExpApi = require('./routes/WorkExperience');
const jobApi = require('./routes/Job');

server.use(express.json());
server.use('/auth', authApi.router);
server.use('/contacts', contactApi.router);
server.use('/subCategories', subCategorieApi.router);
server.use('/location', locationApi.router);
server.use('/salary', salaryApi.router);
server.use('/Workexperience', workExpApi.router);
server.use('/jobs', jobApi.router);

//connect mongoose
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jobportal');
  console.log('connect mongo');
}

server.get('/', (req, res) => {
  res.json({ status: 'success' });
});

server.listen(port, () => console.log('server start'));
