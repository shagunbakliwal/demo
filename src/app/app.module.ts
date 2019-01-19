import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ClearTextFieldComponent } from './components/clear-text-field/clear-text-field.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StorageServiceModule} from 'angular-webstorage-service';


import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angular-6-social-login";
import { MyAccountComponent } from './my-account/my-account.component';
import { UserService } from './user.service';
import { GuestUserOptionsComponent } from './guest-user-options/guest-user-options.component';
import { UserOptionsComponent } from './user-options/user-options.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1608713029348388")
        },
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    ClearTextFieldComponent,
    MyAccountComponent,
    GuestUserOptionsComponent,
    UserOptionsComponent,
    DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    LoadingBarModule.forRoot(),
    FontAwesomeModule,
    StorageServiceModule,
    SocialLoginModule

  ],
  providers: [  UserService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
