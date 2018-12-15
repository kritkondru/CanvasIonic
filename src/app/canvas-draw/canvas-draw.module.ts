import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CanvasDrawPage } from './canvas-draw.page';

const routes: Routes = [
  {
    path: '',
    component: CanvasDrawPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CanvasDrawPage]
})
export class CanvasDrawPageModule {}
