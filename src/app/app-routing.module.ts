import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyAccountComponent } from './my-account/my-account.component';
const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Gallery',
    component: GalleryComponent
  },
  {
    path: 'Contact Us',
    component: ContactUsComponent
  },
  {
    path: 'account',
    component: MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
