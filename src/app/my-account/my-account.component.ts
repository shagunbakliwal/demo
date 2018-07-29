import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  user: User;
  constructor(private userService : UserService, private router: Router) { 
    this.user = new User();
    if(userService.loggedInUser == null){
      this.router.navigate(['Home']);
      return;
    }
    this.user.name = userService.loggedInUser.name;
    this.user.profilePic = userService.loggedInUser.image;
  }

  ngOnInit() {
  }

}
