import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private loadingBar: LoadingBarService) {
    this.tags.push('Shagun Bakliwal');
    this.tags.push('Shubham Shrivastava');
    this.tags.push('Prateek Dash');
  }
  startLoading() {
    this.loadingBar.stop();
    this.loadingBar.start();
    this.getData();
  }

  stopLoading() {
    this.loadingBar.complete();
  }

  website = "PhotoStock";
  selectedBar = {};
  navbarsItems: Map<String, String> = new Map;
  searchText: string = "";
  tags: Array<String> = [];


  ngOnInit() {
    this.navbarsItems.set("Home", "Home");
    this.navbarsItems.set("Gallery", "Gallery");
    this.navbarsItems.set("Contact Us", "Contact Us");
    this.selectedBar = this.navbarsItems.get("Home");
  }

  barClick(item) {
    this.selectedBar = item;
  }

  getNavbarItems(item) {
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
