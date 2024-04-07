/**
 * Represents the configuration class for the application.
 * @class Config
 */
import dotenv from 'dotenv'

export default class Config {
  constructor() {
    dotenv.config()
  }

  /**
   * Returns the singleton instance of the Config class.
   * @returns {Config} The instance of the Config class.
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new Config()
    }
    return this.instance
  }

  /**
   * Returns the API configuration.
   * @returns {Object} The API configuration.
   */
  get api() {
    return {
      version: process.env.API_VERSION || '1.0.0',
      port: process.env.API_PORT || 3000,
      apiRoutePrefix: process.env.API_ROUTE_PREFIX || '/api/v1',
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    }
  }

  get client() {
    return {
      baseUrl: process.env.CLIENT_BASE_URL,
      baseUrtHttps: process.env.CLIENT_BASE_URL_HTTPS,
    }
  }

  get device() {
    return {
      prefix: process.env.DEVICE_PREFIX,
    }
  }

  /**
   * Returns the database configuration.
   * @returns {Object} The database configuration.
   */
  get db() {
    return {
      certPath: process.env.MONGODB_CERT_PATH,
      connection: process.env.MONGODB_CONNECTION_STRING,
      dbName: process.env.MONGODB_DB_NAME,
    }
  }

  /**
   * Returns the JWT configuration.
   * @returns {Object} The JWT configuration.
   */
  get jwt() {
    return {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
      refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    }
  }

  get oauth2() {
    return {
      authorizationURL: process.env.OAUTH2_AUTHORIZATION_URL,
      tokenURL: process.env.OAUTH2_TOKEN_URL,
      clientID: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.OAUTH2_CALLBACK_URL,
    }
  }
}
