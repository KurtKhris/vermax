import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProductsComponent } from './products/products.component';
import { VermaxComponent } from './vermax/vermax.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: VermaxComponent },
  { path: 'chat', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
