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

}
