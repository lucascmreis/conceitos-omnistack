import {Request, Response} from 'express';
import createUser from './services/createUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    email: 'reis@reis.com',
    password:'23123',
    techs: [
      'Node',
      {
        title: 'Javascript',
        experience: 100
      }
    ]
  })
  console.log(user.email)

  return response.json({message:'Hello World TS!'});
}  