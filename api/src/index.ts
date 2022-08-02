import express, {Request, Response} from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo a API'})
})

server.listen(5000, () => {
    console.log('Server listening on port 5000 http://localhost:5000/');
})