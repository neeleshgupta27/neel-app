import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {Routes, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public users;
  
  constructor(private httpClient: HttpClient, 
          private _userService: UserService, 
          private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    let usersData = this._userService.getUsersData();
    usersData.subscribe((res)=>{
      console.log(res);
      this.users= res;
    });
    
   }

   editUser(userId){
    console.log("userId:"+userId);
    //this.router.navigate(['/edit', { id: userId }]);
    //this.router.navigateByUrl('edit');
    return false;
   }

   deleteUser(userId){
     this._userService.deleteUser(userId);
     this.getUsers();
     return false;
   }

}
