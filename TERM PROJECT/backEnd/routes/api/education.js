const express = require("express");
let router = express.Router();
var { Education } = require("../../models/education");
//get products
router.get("/", async (req, res) => {
	let page = Number(req.query.page ? req.query.page : 1);
	let perPage = Number(req.query.perPage ? req.query.perPage : 10);
	let skipRecords = perPage * (page - 1);
	let education = await Education.find().skip(skipRecords).limit(perPage);
	console.log(education);
	let total = await Education.countDocuments();
	return res.send({ total, education });
});
//get single products
router.get("/:id", async (req, res) => {
	try {
		let education = await Education.findById(req.params.id);
		console.log(education);
		if (!education)
			return res.status(400).send("Education With given ID is not present"); //when id is not present id db
		return res.send(education); //everything is ok
	} catch (err) {
		return res.status(400).send("Invalid ID"); // format of id is not correct
	}
});
//update a record
router.put("/:id", async (req, res) => {
	let education = await Education.findById(req.params.id);
	education.Institute = req.body.Institute;
	education.PassOutYear = req.body.PassOutYear;
	education.MajorCourse = req.body.MajorCourse;

	await education.save();
	return res.send(education);
});
//update a record
router.delete("/:id", async (req, res) => {
	let education = await Education.findByIdAndDelete(req.params.id);
	return res.send(education);
});
//Insert a record
router.post("/", async (req, res) => {
	let education = new Education();
	education.Institute = req.body.Institute;
	education.PassOutYear = req.body.PassOutYear;
	education.MajorCourse = req.body.MajorCourse;
	await education.save();
	return res.send(education);
});
module.exports = router;
