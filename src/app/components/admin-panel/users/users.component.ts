import { isUndefined } from 'util';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: User[] = [];
  error: any;
  loading: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private userService: UsersService) { 
    this.userService.getUsers().subscribe(data => {
      if (data.success) {
        if (!isUndefined(data.data)){
          this.userList = data.data;
          
        }
      }
    },
    error => {
      this.error = error
      console.log(error);

    });
  }

  ngOnInit() {
  }

  updateQuestion(user: User) {
    if(user.email && user.name){
      if(user.email.match(this.emailPattern)){
        this.loading = true;
        this.userService.updateUser(user).subscribe(data => {
          if (data.success) {
            if (!isUndefined(data.data)) {      
              this.loading = false;  
              alert('Updated!');  
            }
          }
        },
          error => {
            this.error = error
            console.log(error);
            this.loading = false;
          });
      }else{
        alert('Not updated, invalid email');
      }   
    }else{
      alert('Not updated: name and email cannot be empty');
    }  
  }
}
