import { ErrorRequestHandler, Request, Response } from 'express';

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
    return res.status(404).json({ message: 'All fields must be filled' });
  }
  if (err instanceof Error && err.message === 'BAD_REQUEST') {
    return res.status(404).json({ message: 'All fields must be filled' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

export
{ teamError,
  userError };
