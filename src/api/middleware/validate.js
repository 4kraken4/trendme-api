function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
  return re.test(password)
}

function validateUsername(username) {
  const re = /^[a-zA-Z0-9]{3,}$/
  return re.test(username)
}

function validateName(name) {
  const re = /^[a-zA-Z]{3,}$/
  return re.test(name)
}

function validatePhone(phone) {
  const re = /^[0-9]{10,}$/
  return re.test(phone)
}

function validateId(id) {
  const re = /^[0-9a-fA-F]{24}$/
  return re.test(id)
}

function validateBoolean(bool) {
  return typeof bool === 'boolean'
}

function validateArray(arr) {
  return Array.isArray(arr)
}

function validateObject(obj) {
  return obj !== null && typeof obj === 'object'
}

function validateString(str) {
  return typeof str === 'string'
}

function validateNumber(num) {
  return typeof num === 'number'
}

function validateDate(date) {
  return date instanceof Date
}

function validateEnum(value, options) {
  return options.includes(value)
}

function validateOneOf(value, options) {
  return options.includes(value)
}

function validateAllOf(value, options) {
  return options.every((option) => option === value)
}

function validateAnyOf(value, options) {
  return options.some((option) => option === value)
}

function validateNoneOf(value, options) {
  return options.every((option) => option !== value)
}

function validateOneOrMore(value, options) {
  return options.some((option) => option === value)
}

function validateZeroOrMore(value, options) {
  return options.every((option) => option === value)
}

function validateZeroOrOne(value, options) {
  return options.includes(value)
}

function validateCustom(value, options) {
  return options(value)
}

const validator = {
  validateEmail,
  validatePassword,
  validateUsername,
  validateName,
  validatePhone,
  validateId,
  validateBoolean,
  validateArray,
  validateObject,
  validateString,
  validateNumber,
  validateDate,
  validateEnum,
  validateOneOf,
  validateAllOf,
  validateAnyOf,
  validateNoneOf,
  validateOneOrMore,
  validateZeroOrMore,
  validateZeroOrOne,
  validateCustom,
}

export default validator
