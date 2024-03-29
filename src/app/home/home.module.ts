import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRountingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [HomeRountingModule, CommonModule, SharedModule],
})
export class HomeModule {}
