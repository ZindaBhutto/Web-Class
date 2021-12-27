var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var educationSchema = mongoose.Schema({
	Institute: "String",
	PassOutYear: "Number",
	MajorCourse: "String",
});
var Education = mongoose.model("Education", educationSchema);

function validateEducation(data) {
	const schema = Joi.object({
		Institute: Joi.string().min(3).max(100).required(),
		PassOutYear: Joi.number().min(4).required(4),
	});
	return schema.validate(data, { abortEarly: false });
}
module.exports.Education = Education;
module.exports.validate = validateEducation;
