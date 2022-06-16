const database = require('../../data/db-config');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/

const checkSchemeId = async (request, response, next) => {
  try {
    const existingScheme = await database('schemes').where('scheme_id', request.params.scheme_id).first();
    if (!existingScheme) {
      next({ status: 404, message: `scheme with scheme_id ${request.params.scheme_id} not found` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/

const validateScheme = (request, response, next) => {
  const { scheme_name } = request.body;
  if (!scheme_name || typeof scheme_name !== 'string' || !scheme_name.trim()) {
    next({ status: 400, message: 'invalid scheme_name' });
  } else {
    next();
  }
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
