import * as Sinon from 'sinon';
import * as chai from 'chai';
import TeamModel from "../database/models/Team.model"
import TeamService from '../services/TeamService'
import { TeamAtributes } from "../database/models/Team.model"
import allTeams from '../mocks/mokedTeams'

describe('Team Service', () => {
    describe('getAll', () => {
        it('retorna um array com todos os times',async () => {
            // arrenge => dado um contexto
           
            Sinon.stub(TeamModel, 'findAll').resolves(allTeams as TeamModel[])
            // act => açao
            const teams = await TeamService.getAll()
            // assert => oq é esperado
            chai.expect(teams).to.be.equal(allTeams)
            Sinon.restore();
        })
    })
})