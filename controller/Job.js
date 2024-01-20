const { Job } = require('../model/Job');

exports.createJobs = async (req, res) => {
  const jobs = new Job(req.body);
  try {
    const response = await jobs.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.fetchJobs = async (req, res) => {
  let qry = Job.find({});
  let qryDemo = Job.find({});
  if (req.query.title) {
    qry = qry.find({ title: req.query.title });
    qryDemo = qryDemo.find({ title: req.query.title });
  }
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    qry = qry.skip(pageSize * (page - 1)).limit(pageSize);
  }
  let tot = await qryDemo.count().exec();
  try {
    res.set('total', tot);
    const response = await qry.exec();
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
  }
};
