import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { decodeToken } from '../utils/jwt';

const teamError: ErrorRequestHandler = (err: unknown, _req: Request, res: Response, _next) => {
  if (err instanceof Error && err.message === 'NOT FOUND') {
    return res.status(404).json({ message: 'Não encontrado' });
  }
  if (err instanceof Error && err.message === 'NOT FOUND') {
    return res.status(404).json({ message: 'e-mail não' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

const userError: ErrorRequestHandler = (err: unknown, _req: Request, res: Response, _next) => {
  if (err instanceof Error && err.message === 'BAD_REQUEST') {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (err instanceof Error && err.message === 'BAD_REQUEST') {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

const tokenError = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const verifyToken = decodeToken(token);

  console.log(verifyToken);

  if (verifyToken === 'invalid token') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();

  return res.status(500).json({ message: 'Erro token inesperado' });
};

export
{ teamError,
  userError,
  tokenError,
};
