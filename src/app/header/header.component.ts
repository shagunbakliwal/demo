import { Inject } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from "@angular/router";


import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { UserService } from '../user.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public data: any = [];
  website = "PhotoStock";
  selectedBar = {};
  navbarsItems: Map<String, String> = new Map;
  searchText: string = "";
  tags: Array<String> = [];
  userImage = null;
  activeUserType = null;
  male = "https://img.icons8.com/doodle/48/000000/user.png";
  guest = "https://img.icons8.com/cotton/64/000000/administrator-male-2-1.png";
  female = "https://img.icons8.com/doodle/48/000000/user-female.png";
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.user.loggedInUser = userData;
        this.storage.set("user", userData);
        this.data["user"] = this.storage.get("user");
        this.router.navigate(['/account']);
      }
    );
  }


  constructor(private loadingBar: LoadingBarService, private socialAuthService: AuthService,
    private router: Router, private user: UserService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.tags.push('Shagun Bakliwal');
    this.tags.push('Shubham Shrivastava');
    this.tags.push('Prateek Dash');
    this.userImage = this.guest;
    this.activeUserType = "guest";
  }
  startLoading() {
    this.loadingBar.stop();
    this.loadingBar.start();
    this.getData();
  }

  stopLoading() {
    this.loadingBar.complete();
  }



  ngOnInit() {
    this.navbarsItems.set("Home", "Home");
    this.navbarsItems.set("Gallery", "Gallery");
    this.navbarsItems.set("Contact Us", "Contact Us");
    this.selectedBar = this.navbarsItems.get("Home");
  }

  barClick(item) {
    this.selectedBar = item;
  }

  getNavbarItems() {
    return Array.from(this.navbarsItems.keys());
  }

  getData() {
    if (this.tags.includes(this.searchText)) {
      this.loadingBar.stop();
    }
  }

  search1 = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.tags.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
}
