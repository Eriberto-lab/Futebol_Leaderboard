import TeamModel, { TeamAtributes } from '../database/models/Team.model';

class TeamService {
  public static async getAll(): Promise<TeamAtributes[]> {
    const allteams = await TeamModel.findAll();

    return allteams;
  }

  public static async getById(id: number) {
    const team = await TeamModel.findOne({ where: { id } });

    if (!team) throw new Error('NOT FOUND');

    return team;
  }
}

export default TeamService;
