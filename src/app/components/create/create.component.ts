import { Component, ViewChild } from '@angular/core';
//import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../services/user.service';
import { User } from './../../user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{

  title = 'Add Coin';
  idCount = 12;
  user : User = new User();
  fname : string = "abc";
  constructor(private httpClient: HttpClient, private _userService:UserService) { }
  
  createUser(){
    console.log("form user:"+this.user.toString());
    this._userService.createUser(this.user);
    return false;
   }

}


/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;

  
}

