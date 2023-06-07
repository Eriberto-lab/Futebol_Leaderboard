import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import Decode from '../types/decode';

const secretKey: Secret = process.env.JWT_SECRET as string;

const configJWT: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload: JwtPayload) => {
  const token = sign(
    payload,
    secretKey,
    configJWT,
  );

  return token;
};

const decodeToken = (token: string): Decode => {
  const tokenDecode = verify(token, secretKey);
  return tokenDecode as Decode;
};

export {
  generateToken,
  decodeToken,
};
