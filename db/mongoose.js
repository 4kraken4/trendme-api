/**
 * This module establishes a connection to the MongoDB database using Mongoose.
 * @module mongoose
 */

import mongoose from 'mongoose'
import config from '../src/config/app.config.js'

/**
 * The path to the TLS certificate file.
 * @type {string}
 */
const credentials = config.getInstance().db.certPath

/**
 * The connection string for the MongoDB database.
 * @type {string}
 */
const connection_string = config.getInstance().db.connection

/**
 * The name of the database.
 * @type {string}
 */
const database_name = config.getInstance().db.dbName

/**
 * Connects to the MongoDB database using the provided connection string and options.
 * @param {string} connection_string - The connection string for the MongoDB database.
 * @param {Object} options - The options for the MongoDB connection.
 * @param {string} options.tlsCertificateKeyFile - The path to the TLS certificate file.
 * @param {string} options.authMechanism - The authentication mechanism to use.
 * @param {string} options.authSource - The authentication source to use.
 * @returns {Promise} A promise that resolves when the connection is established.
 */
mongoose.connect(connection_string, {
  tlsCertificateKeyFile: credentials,
  authMechanism: 'MONGODB-X509',
  authSource: '$external',
  dbName: database_name,
})

/**
 * Sets the default promise library to use for Mongoose.
 * @type {PromiseConstructor}
 */
mongoose.Promise = global.Promise

/**
 * Event listener for the 'error' event of the database connection.
 * @param {Error} error - The error object.
 */
mongoose.connection.on('error', (error) => {
  console.error('Error connecting to database', error)
})

/**
 * Event listener for the 'open' event of the database connection.
 */
mongoose.connection.once('open', () => {
  console.info(`Connected to '${database_name}' database`)
})

/**
 * The Mongoose instance.
 * @type {mongoose}
 */
export default mongoose
