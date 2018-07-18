import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
