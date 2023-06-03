import { Secret, SignOptions, sign, verify } from 'jsonwebtoken';

const secretKey: Secret = process.env.JWT_SECRET as string;

const configJWT: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (id: number) => {
  const data = {
    id,
  };
  const token = sign(
    data,
    secretKey,
    configJWT,
  );

  return token;
};

const decodeToken = (token: string) => {
  try {
    const tokenDecode = verify(token, secretKey);
    return tokenDecode;
  } catch (err) {
    return 'invalid token';
  }
};

export {
  generateToken,
  decodeToken,
};
