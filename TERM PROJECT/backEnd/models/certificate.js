var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var certificateSchema = mongoose.Schema({
	Title: "String",
	Year: "Number",
	Institute: "String",
});
var Certificate = mongoose.model("Certificate", certificateSchema);

function validateCertificate(data) {
	const schema = Joi.object({
		Institutee: Joi.string().min(3).max(100).required(),
		Year: Joi.number().min(4).required(4),
	});
	return schema.validate(data, { abortEarly: false });
}
module.exports.Certificate = Certificate;
