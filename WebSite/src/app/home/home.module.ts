import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './page/home/home-routing.module';
import { HomeComponent } from './page/home/home.component';


@NgModule({
  declarations:[HomeComponent],
  imports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
