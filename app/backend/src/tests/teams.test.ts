import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';
import TeamModel from "../database/models/Team.model"
import TeamService from '../services/TeamService'
import { TeamAtributes } from "../database/models/Team.model"
import allTeams from '../mocks/mokedTeams'

chai.use(chaiHttp);

const { expect } = chai;

describe('Team Service', () => {
    afterEach(() => {
        Sinon.restore();
    })
    describe('testa funçao getAll', () => {
        it('retorna um array com todos os times',async () => {
            // arrenge => dado um contexto
            Sinon.stub(TeamModel, 'findAll').resolves(allTeams as TeamModel[])
            // act => açao
            const teams = await TeamService.getAll()
            // assert => oq é esperado
            chai.expect(teams).to.be.equal(allTeams)
            
        })

        it('testa rota /teams',async () => {
            Sinon.stub(TeamModel, 'findAll').resolves(allTeams as TeamModel[])
    
            const teams = await chai.request(app).get('/teams');
            
            expect(teams.status).to.be.equal(200);
            expect(teams.body).to.be.deep.equal(allTeams);
    
        })

        it('testa se rota /teams:id retorna o time correto',async () => {
            Sinon.stub(TeamModel, 'findOne').resolves(allTeams[0] as TeamModel)
    
            const team = await chai.request(app).get('/teams/1');
            
            expect(team.status).to.be.equal(200);
            expect(team.body).to.be.deep.equal(allTeams[0]);
    
        })

        it('testa se passado um id inexistente na rota /teams:id retorna o erro 404',async () => {
            Sinon.stub(TeamModel, 'findOne').resolves(null)
    
            const team = await chai.request(app).get('/teams/1');
            
            expect(team.status).to.be.equal(404);
            expect(team.body).to.be.deep.equal( { message: 'Time não encontrado' });
    
        })
    })

    
})