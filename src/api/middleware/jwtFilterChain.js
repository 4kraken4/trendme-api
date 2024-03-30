import { API_KEY_AUTH, WHITE_LIST } from '../../config/route.config.js'
import tokenService from '../../services/jwt/jwt.service.js'

const jwtAuthorize = async (requiredRoles) => async (req, res, next) => {
  // if the request path is in the white list, then we don't need to check for the token
  if (WHITE_LIST.some((path) => req.originalUrl.includes(path))) {
    return next()
  }

  // if the request is to add weather data, then we don't need to check for the token we only need the api key
  if (
    req.method === 'POST' &&
    API_KEY_AUTH.some((path) => req.originalUrl.includes(path))
  ) {
    if (req.headers['x-api-key']) {
      return next()
    } else {
      return next(new Error('ApiKeyMissingError'))
    }
  }

  try {
    // check for the authorization header
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader) {
      throw new Error('AuthorizationHeaderMissingError')
    }

    const token = authHeader.split(' ')[1]
    if (!token) {
      throw new Error('TokenNotProvidedError')
    }

    const decoded = tokenService.verifyToken(token)
    req.user = decoded
    const revoked = await tokenService.isTokenRevoked(token)
    if (revoked) {
      throw new Error('TokenRevokedError')
    }

    var role = req.user?.role
    if (!role) {
      throw new Error('PrivilegeMissingError')
    }

    const hasRequiredRole = role && requiredRoles.some((r) => r.includes(role))
    if (hasRequiredRole) {
      next()
    } else {
      throw new Error('UnauthorizedError')
    }
  } catch (error) {
    next(error)
  }
}

export default jwtAuthorize
