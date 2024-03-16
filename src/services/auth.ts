import { api } from '@/api'


interface IUser{
    email:string;
    password:string;
    name:string
}



class AuthService {
   async signup(user : IUser) {
    const {data} = await api.post('/signup',user)
    console.log(data);
    return data
  }
}

export default new AuthService()