const database = require('../../data/db-config');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/

const checkSchemeId = (request, response, next) => {

};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/

const validateScheme = (request, response, next) => {

};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/

const validateStep = (request, response, next) => {

};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
