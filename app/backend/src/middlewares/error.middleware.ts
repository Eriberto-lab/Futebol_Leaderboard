import { ErrorRequestHandler, Request, Response } from 'express';

const teamError: ErrorRequestHandler = (err: unknown, _req: Request, res: Response, _next) => {
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  if (err instanceof Error && err.message === 'NOT FOUND') {
    return res.status(404).json({ message: 'Time não encontrado' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

export default
teamError;
