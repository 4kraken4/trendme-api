import { randomBytes } from 'crypto'

const keyGenerator = {
  generate: async (length) => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'
    const charsetLength = charset.length
    let apiKey = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = await getRandomIndex(charsetLength)
      apiKey += charset.charAt(randomIndex)
    }

    return apiKey
  },
}
async function getRandomIndex(max) {
  const randomBytesBuffer = await new Promise((resolve, reject) => {
    randomBytes(1, (err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf)
      }
    })
  })

  return randomBytesBuffer.readUInt8(0) % max
}

export default keyGenerator
