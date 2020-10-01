import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      },
    ]
)]})

export class AboutModule { }
