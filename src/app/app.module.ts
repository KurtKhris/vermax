import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { OurServicesComponent } from './our-services/our-services.component';
import {MatCardModule} from '@angular/material/card';
import { VermaxComponent } from './vermax/vermax.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { SoftwareModalComponent } from './our-services/software-modal/software-modal.component';
import { HardwareModalComponent } from './our-services/hardware-modal/hardware-modal.component';
import { SystemModalComponent } from './our-services/system-modal/system-modal.component';
import { AugmentModalComponent } from './our-services/augment-modal/augment-modal.component';
import { ConsultancyModalComponent } from './our-services/consultancy-modal/consultancy-modal.component';
import { NetworkingModalComponent } from './our-services/networking-modal/networking-modal.component';
import { IgofixModalComponent } from './products/igofix-modal/igofix-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainNavbarComponent,
    CarouselComponent,
    OurServicesComponent,
    VermaxComponent,
    ProductsComponent,
    FooterComponent,
    SoftwareModalComponent,
    HardwareModalComponent,
    SystemModalComponent,
    AugmentModalComponent,
    ConsultancyModalComponent,
    NetworkingModalComponent,
    IgofixModalComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MatFormFieldModule,
    MatCarouselModule.forRoot(),
    CarouselModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    FontAwesomeModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
