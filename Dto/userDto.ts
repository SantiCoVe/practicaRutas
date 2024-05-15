class User{

    private userEmail: string;
    private userPassword: string;
    private userNombres: string;

    constructor(
        email:string, 
        password:string,
        nombres:string
    ){
        this.userEmail = email;
        this.userPassword = password;
        this.userNombres = nombres;
    }

    //Getters
    get email(): string{
        return this.userEmail
    }

    get password(): string{
        return this.userPassword
    }

    get nombres(): string{
        return this.userNombres
    }

    //Setters

    set email(email:string){
        this.userEmail = email;
    }

    set password(password:string){
        this.userPassword = password
    }

    set nombres(nombres:string){
        this.userNombres = nombres
    }

}

export default User