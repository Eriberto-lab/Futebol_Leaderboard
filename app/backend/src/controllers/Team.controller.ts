import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  public static async getAll(_req: Request, res: Response) {
    const teams = await TeamService.getAll();
    return res.status(200).json(teams);
  }

  public static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const teams = await TeamService.getById(+id);
    return res.status(200).json(teams);
  }
}

export default TeamController;
