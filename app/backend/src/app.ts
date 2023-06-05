import * as express from 'express';
import * as cors from 'cors';
import teamRouter from './routes/teams.routes';
import { teamError, userError } from './middlewares/error.middleware';
import userRouter from './routes/users.route';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.config();
    this.met();
    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private met(): void {
    this.app.use('/teams', teamRouter);
    this.app.use('/teams:id', teamRouter);
    this.app.use('/login', userRouter);
    this.app.use(userError);
    this.app.use(teamError);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
