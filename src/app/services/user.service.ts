import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  idCount = 12;
  private users;
  private usersData : User[] = [];
  results: User[];
  constructor(private httpClient: HttpClient) { }

  getUsersData(){
    let users;
    return this.httpClient.get('http://localhost:3000/users');
  }

  getUsers(){
    let users;
    this.httpClient.get('http://localhost:3000/users').subscribe((res : User[])=>{
      console.log("res::"+res);
      this.usersData= res;
      console.log("this.usersData:"+this.usersData);
    });
    return this.usersData;
   }

   getUsersWithPromise(){
    let promise = new Promise((resolve, reject) => {

      this.httpClient.get('http://localhost:3000/users')
          .toPromise()
          .then(
            (res : User[]) => { // Success
                this.results = res.map(item => {
                  var user = new User();
                  user.id = item.id;
                  user.first_name=item.first_name;
                  user.last_name=item.last_name;
                  user.email = item.email;
                  console.log("User:"+user);
                  return user;
                });
    
                resolve(this.results);
                console.log( "final result::"+ this.results);
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    return promise;
  
   }

   createUser(userObj: User){
    let usersData : User[] = [];
    this.getUsersWithPromise().then((res : User[]) =>{
        
        console.log("first:::"+res);
        res.forEach(element => {
          this.idCount = element.id;
          //console.log(element.id +", this.idCount:"+this.idCount);
          
        });
        this.idCount++;
        console.log("new this.idCount:"+this.idCount);

        userObj.id = this.idCount++;
        this.httpClient.post('http://localhost:3000/users',userObj
        /*{
          "id":this.idCount++,
          "first_name":"neelesh",
          "last_name":"gupta",
          "email":"test@test.com"
        }*/
        ).subscribe((res)=>{
          console.log(res);
          console.log("POST call successful value returned in body", res);
        });

    });
    
    
   }

   deleteUser(userId){
    let search = new URLSearchParams();
    search.set('id', userId);
    let url = 'http://localhost:3000/users/' + userId;
    this.httpClient.delete(url).subscribe((res)=>{
          console.log(res);
          console.log("Delete call successful value returned in body", res);
        });
      }
}
