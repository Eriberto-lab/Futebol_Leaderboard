import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';
import UserModel from '../database/models/User.model'
import allUsers from '../mocks/mokedUsers'
import UserService from '../services/UserService'
chai.use(chaiHttp);

const { expect } = chai;

describe('User Service', () => {
    afterEach(() => {
        Sinon.restore();
    })
    describe('testa funçao getAll', () => {
        it('testa se passado email e senha corretos é retornado um token',async () => {
            // arrenge => dado um contexto
            // Sinon.stub(UserModel, 'findAll').resolves(allUsers as UserModel[])
            const email = 'admin@admin.com'
            const password = 'secret_admin'
            const obj = {token: 'string'}
            // act => açao
            const users = await UserService.login(email, password);
            // assert => oq é esperado
            chai.expect(users).to.be.equals(Object)
            
        })

        it('testa rota /users',async () => {
            Sinon.stub(UserModel, 'findAll').resolves(allUsers as UserModel[])
    
            const users = await chai.request(app).get('/users');
            
            expect(users.status).to.be.equal(200);
            expect(users.body).to.be.deep.equal(allUsers);
    
        })

        it('testa se rota /user:id retorna o user correto',async () => {
            Sinon.stub(UserModel, 'findOne').resolves(allUsers[0] as UserModel)
    
            const user = await chai.request(app).get('/users/1');
            
            expect(user.status).to.be.equal(200);
            expect(user.body).to.be.deep.equal(allUsers[0]);
    
        })

        it('testa se passado um id inexistente na rota /user:id retorna o erro 404',async () => {
            Sinon.stub(UserModel, 'findOne').resolves(null)
    
            const user = await chai.request(app).get('/users/1');
            
            expect(user.status).to.be.equal(404);
            expect(user.body).to.be.deep.equal( { message: 'User não encontrado' });
    
        })
    })

    
})