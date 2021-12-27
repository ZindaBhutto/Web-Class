const express = require("express");
let router = express.Router();
var { Certificate } = require("../../models/certificate");
//get products
router.get("/", async (req, res) => {
	let page = Number(req.query.page ? req.query.page : 1);
	let perPage = Number(req.query.perPage ? req.query.perPage : 10);
	let skipRecords = perPage * (page - 1);
	let certificate = await Certificate.find().skip(skipRecords).limit(perPage);
	let total = await Certificate.countDocuments();
	return res.send({ total, certificate });
});
//get single products
router.get("/:id", async (req, res) => {
	try {
		let certificate = await Certificate.findById(req.params.id);
		if (!certificate)
			return res.status(400).send("Certificate With given ID is not present"); //when id is not present id db
		return res.send(certificate); //everything is ok
	} catch (err) {
		return res.status(400).send("Invalid ID"); // format of id is not correct
	}
});
//update a record
router.put("/:id", async (req, res) => {
	let certificate = await Certificate.findById(req.params.id);
	certificate.Title = req.body.Title;
	certificate.Year = req.body.Year;
	certificate.Institute = req.body.Institute;

	await certificate.save();
	return res.send(certificate);
});
//update a record
router.delete("/:id", async (req, res) => {
	let certificate = await Certificate.findByIdAndDelete(req.params.id);
	return res.send(certificate);
});
//Insert a record
router.post("/", async (req, res) => {
	let certificate = new Certificate();
	certificate.Title = req.body.Title;
	certificate.Year = req.body.Year;
	certificate.Institute = req.body.Institute;
	await certificate.save();
	return res.send(certificate);
});
module.exports = router;
