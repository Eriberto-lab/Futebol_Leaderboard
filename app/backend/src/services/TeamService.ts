
import TeamModel, { TeamAtributes } from "../database/models/Team.model";

class TeamService {
   public static async getAll(): Promise<TeamAtributes[]> {
        return await  TeamModel.findAll()
    }
}

export default TeamService;