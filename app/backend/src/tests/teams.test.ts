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
    })

    
})