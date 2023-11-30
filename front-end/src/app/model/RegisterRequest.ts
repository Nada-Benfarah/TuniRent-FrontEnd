export class RegisterRequest {
  username='';
  password='';
  email='';
  lastname='';
  firstname='';
  numTel='';

  constructor(firstname:string,
              lastname:string,
              username:string,
              email:string,
              numTel:string,
              password:string

  ){
    this.username=username;
    this.password=password;
    this.firstname=firstname;
    this.email=email;
    this.numTel=numTel;
    this.lastname=lastname;
  }
}
