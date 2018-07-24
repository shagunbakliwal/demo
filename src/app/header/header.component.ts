import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    for(var i=1;i<20;i++)
    this.tags.push('i'+i+i);
  }

  website = "PhotoStock";
  selectedBar = {};
  navbarsItems: Map<String, String> = new Map;
  searchQuery : string ="";
  tags: Array<String> = [];


  ngOnInit(){
    this.navbarsItems.set("Home","Home");
    this.navbarsItems.set("Gallery","Gallery");
    this.navbarsItems.set("Contact Us", "Contact Us");
    this.selectedBar = this.navbarsItems.get("Home");
  }

  barClick(item) {
    this.selectedBar = item;
  }

  getNavbarItems(item){
    return Array.from(this.navbarsItems.keys());
  }

  search(){
    alert("Searching for "+this.searchQuery);
    alert(this.tags.includes(this.searchQuery));
  }
}
