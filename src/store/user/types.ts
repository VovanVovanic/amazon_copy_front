
export interface IUser{
 id: number
 email: string
 name: string
 avatarPath: string
 phone:string
}
export interface IUserState{
 email: string
 isAdmin:boolean
}

export interface UserUpdate{
 email?: string
 password?: string
 name?: string
 avatarPath?: string
 phone?: string
}

export interface ITokens{
 accessToken: string
 refreshToken:string
}

export interface IInitialState{
 user:IUserState
 isLoading:boolean
}

export interface IEmailPassword{
 email: string
 password:string
}

export interface IAuthResponse extends ITokens{
 user: IUser & {
  isAdmin:boolean
 }
}