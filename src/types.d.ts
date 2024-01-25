declare module "*.module.css"
type AppConfig = {
    baseUrl: string
}

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
type User = 'logged-in' | 'logged-out'| 'registered'
interface counter {
    userStatus: User,
    name:string,
    email:string,
    password:string  
  }
interface loginUser {
    userStatus: User,
    email:string,
    password:string  
  }
