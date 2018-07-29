import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from '../app/user.model';
import { SocialUser } from '../../node_modules/angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User>(new User);
  loggedInUser: SocialUser;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.loggedInUser = this.storage.get("user");
  }
}
