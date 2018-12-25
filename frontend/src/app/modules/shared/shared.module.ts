import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookComponent } from './components/look/look.component';

@NgModule({
  declarations: [LookComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LookComponent
  ]
})
export class SharedModule { }
