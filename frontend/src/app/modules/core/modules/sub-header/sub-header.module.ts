import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  declarations: [SubHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SubHeaderComponent
  ]
})
export class SubHeaderModule { }
