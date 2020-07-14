const connection = require("../database/connection");


module.exports = {
	async registrar(request, response){
	
		const account_id = request.tokenInfo.id;

		const {title, description, effectiveDate, done} = request.body;

		try{
			const [id] = await connection('ocorrencia').insert({account_id, title, description, effectiveDate, done})
			return response.json({id})

		}catch(error){
			console.log(error);
			return response.status(500).send();
		}

	},
	async listar(request, response){

		const account_id = request.tokenInfo.id;
		console.log(request.query)
		let { page = 1, done } = request.query
		done = JSON.parse(done)


		try{
			const ocorrencias = await connection('ocorrencia')
			.where('account_id','=', account_id)
			.where('done','=', done)
			.limit(5)
			.offset((page-1)*5)
			.select('*');

			const [count] = await connection('ocorrencia').where('account_id','=', account_id).count();

			response.header('X-Total-Count', count['count(*)']);
			response.header('X-Total-pages', Math.ceil( count['count(*)']/5) );
		
			response.json(ocorrencias)
		}catch(error){
			console.log(error)

			return response.status(500).send();
		}

	},
	async recuperarOcorrencia(request,response){
		const account_id = request.tokenInfo.id;
		const id = request.params.id


		try{
			const ocorrencia = await connection('ocorrencia').where('id','=',id).where('account_id','=',account_id).select('*')

			return response.json(ocorrencia)
		}catch(error){
			console.log(error)

			return response.status(500).send();
		}
	},
	async atualizar(request, response){
		const account_id = request.tokenInfo.id;
		const {id, title, description, effectiveDate, done} = request.body;

		try{
			const idRetorno = await connection('ocorrencia')
			.where('id','=',id)
			.where('account_id','=',account_id)
			.update({id, title, description, effectiveDate, done})

			return response.json({id:idRetorno})

		}catch(error){
			console.log(error);
			return response.status(500).send();
		}
	},
	async remover(request, response){
		const account_id = request.tokenInfo.id;
		const { id } = request.params
		
		try{
			const idRetorno = await connection('ocorrencia')
			.where('id','=',id)
			.where('account_id','=',account_id)
			.delete()

			if(idRetorno) return response.json({id:idRetorno})

			response.status(204).send();
		}catch(error){
			console.log(error)
			response.status(500).send();
		}
	},
	async finalizarOcorrencia(request, response){
		const account_id = request.tokenInfo.id;

		console.log(request.body.id)
		const id  = request.body.id

		try{
			const retorno = await connection('ocorrencia')
			.where('id','=',id)
			.where('account_id','=',account_id)
			.update({done:true})
			if(!Boolean(retorno)) return response.status(404).send()

			return response.json({id:id})

		}catch(error){
			console.log(error)
			response.status(500).send();
		}
		
	}
}