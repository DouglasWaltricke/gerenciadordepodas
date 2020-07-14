require('dotenv').config()
const connection = require("../database/connection");
const crypto = require('crypto');
const process = require('../.env');
const jwt = require('jsonwebtoken');
const { nextTick } = require('process');


module.exports = {
	async registrar(request, response){
	

		const {name, email, password} = request.body

		const id = crypto.randomBytes(4).toString('HEX');
		
		try{
			await connection('account').insert({id, name, email, password})
			return response.json({email,password})
		}catch(error){
			console.log(error)
			return response.status(500).send()
		}

	},
	async listar(request, response){
		

		try{
			const accounts = await connection('account').select('*');
			return response.json(accounts);

		}catch(error){
			console.log(error);
			return response.status(500).send();
		}

	},
	async recuperarAccount(request,response){
		
		const account_id = request.tokenInfo.id;

		try{
			const account = await connection('account').where('account.id','=', account_id).first()
			return response.json(account)
		}catch(error){
			console.log(error)
			return response.status(500).send();

		}

	},
	async atualizar(request, response){
	

		const {id, name, email, password} = request.body
		const account_id = request.tokenInfo.id;
		console.log(account_id)


		try{
			const idResponse = await connection('account').where('id','=', account_id).update({
				id, 
				name, 
				email, 
				password
			})

			return response.json({id:idResponse})
		}catch(error){
			console.log(error);
			return response.status(500).send();

		}

	},
	async remover(request, response){
		const { id } = request.params
		
		try{
			const idResponse = await connection('account').where('id','=', id).delete()
			if(idResponse) return response.json({id:id})
			response.status(204).send();
		}catch(error){
			console.log(error)
		}

	},
	async logIn(request, response){
		const {password, email} = request.body;
		
		try{
			const account = await connection('account').where('email', email).where('password', password).select('*').first()
			if(!account) return response.status(404).send();

			const acessToken = jwt.sign( {id: account.id}, SECRET_KEY, { expiresIn: '1800h'} )
			return response.json({token:acessToken, id: account.id})
		}catch(error){
			console.log(error)
		}
	}
}