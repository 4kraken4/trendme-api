function errorHandler(err, req, res, next) {
  if (err.code === 11000 || err.code === 11001) {
    res.status(400).json({
      message:
        "Sorry, the data you're trying to input already exists in our system. Please choose a different key or modify your request accordingly.",
    })
  } else if (
    err.message === 'BadRequest' ||
    err.message === 'data and hash arguments required'
  ) {
    res.status(400).json({
      message:
        'Oops! Something went wrong with your request. Please review your input and try again.',
    })
  } else if (err.message === 'EmptyCartError') {
    res.status(400).json({
      message:
        'Oops! It seems your cart is empty. Please add items to your cart before proceeding with the checkout.',
    })
  } else if (err.message === 'InvalidCategoryError') {
    res.status(400).json({
      message:
        'Oops! The category provided is invalid. Please make sure you are selecting a valid category and try again.',
    })
  } else if (err.message === 'PrivilegeMissingError') {
    res.status(400).json({
      message:
        'Oops! It seems your account is missing the required privileges to perform this action. Please contact your administrator to grant the necessary privileges.',
    })
  } else if (err.message === 'InvalidEmailError') {
    res.status(400).json({
      message:
        "Oops! The email provided is invalid. Please make sure you've entered a valid email address and try again.",
    })
  } else if (err.message === 'InvalidPasswordError') {
    res.status(400).json({
      message:
        'Sorry, the password provided is invalid. Please double-check your password and try again.',
    })
  } else if (
    err.message === 'jwt malformed' ||
    err.message === 'InvalidTokenError' ||
    err.message === 'TokenDoesNotExistError'
  ) {
    res.status(401).json({
      message:
        "Sorry, the token provided is invalid. Please make sure you're using a valid authentication token and try again.",
    })
  } else if (err.message === 'ApiKeyMissingError') {
    res.status(401).json({
      message:
        'Oops! It looks like the API key is missing from your request. To access this resource, please ensure that you include the required API key with your request.',
    })
  } else if (err.message === 'jwt expired') {
    res.status(401).json({
      message:
        'It appears your session has expired. Please log in again to continue accessing the requested resource.',
    })
  } else if (err.message === 'ApikeyExpiredError') {
    res.status(401).json({
      message:
        'It appears your API key has expired. Please contact the administrator to generate a new API key.',
    })
  } else if (err.message === 'AuthorizationHeaderMissingError') {
    res.status(401).json({
      message:
        'Oops! It looks like the authorization header is missing from your request. To access this resource, please ensure that you include the required authorization header with your request.',
    })
  } else if (err.message === 'TokenRevokedError') {
    res.status(401).json({
      message:
        "Oops! It seems that the token you're using has been revoked. Please log in again to generate a new token",
    })
  } else if (err.message === 'ApikeyRevokedError') {
    res.status(401).json({
      message:
        "Oops! It seems that the API key you're using has been revoked. Please contact the administrator to generate a new API key.",
    })
  } else if (
    err.message === 'UnauthorizedError' ||
    err.message === 'ForbiddenError' ||
    err.message === 'ApikeyNotFoundError'
  ) {
    res.status(401).json({
      message:
        'Oops! You are not authorized to perform this action. Please make sure you have the necessary permissions or credentials.',
    })
  } else if (err.message === 'BadCredentialsError') {
    res.status(401).json({
      message:
        'Uh-oh! It seems like the credentials provided are incorrect. Please double-check your username and password and try again.',
    })
  } else if (err.message === 'TokenNotProvidedError') {
    res.status(401).json({
      message:
        'Looks like you forgot to provide a token. To access this resource, please make sure to include a valid authentication token in your request headers.',
    })
  } else if (err.message === 'UserNotFoundError') {
    res.status(404).json({
      message:
        "Oops! We couldn't find the user you're looking for. Please double-check the user's details and try again.",
    })
  } else if (err.message === 'DeviceNotFoundError') {
    res.status(404).json({
      message:
        "Oops! We couldn't find the device you're looking for. Please make sure the device exists and try again.",
    })
  } else if (err.message === 'StationNotFoundError') {
    res.status(404).json({
      message:
        "Oops! We couldn't find the station you're looking for. Please make sure the station is registered and try again",
    })
  } else if (err.message === 'DeviceExistsError') {
    res.status(409).json({
      message:
        "Sorry, it seems that a device with this name already exists. Please try a different name or modify the existing device's details.",
    })
  } else if (err.message === 'StationExistsError') {
    res.status(409).json({
      message:
        "Sorry, it seems that a station with this name already exists. Please try a different name or modify the existing station's details.",
    })
  } else if (err.message === 'UserExistsError') {
    res.status(409).json({
      message:
        'Sorry, it seems that a user with this email already exists. Please try logging in instead, or use a different email address to create a new account.',
    })
  } else if (err.message === 'PrivilegeConflictError') {
    res.status(409).json({
      message:
        "Oops! Looks like there's a conflict with the user's privileges. User already has the privilege level you are trying to assign.",
    })
  } else if (err.message === 'PrivilegeNotFoundError') {
    res.status(404).json({
      message:
        "Sorry, we couldn't find the privilege level you're trying to assign. Please make sure you're selecting a valid privilege level and try again.",
    })
  } else {
    // Check if the error is a validation error
    if (err.name === 'SyntaxError') {
      res.status(400).json({
        message:
          "Oops! It seems there's a syntax error in your json request. Please review your syntax and try again.",
      })
    } else {
      res.status(500).json({
        message:
          "Apologies! Something unexpected happened on our end. Our team has been notified, and we're working to fix it. Please try again later.",
      })
    }
  }
  console.error(err.stack)
}

export default errorHandler
