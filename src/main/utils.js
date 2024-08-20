import jwt from 'jsonwebtoken'

const secretKey = 'a1da36ac7655af46020e9a11c092353fd42adb341fe92093796308d75f12IamKing101'

export const JwtToken = {
  sign: async (id) => {
    return jwt.sign({ id: id }, secretKey, {
      expiresIn: '24h' // expires in 24 hours
    })
  },
  verify: async (token) => {
    return jwt.verify(token, secretKey, {
      expiresIn: '24h' // expires in 24 hours
    })
  }
}
