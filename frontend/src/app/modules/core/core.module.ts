import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './modules/header/header.module';
import { SubHeaderModule } from './modules/sub-header/sub-header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SubHeaderModule
  ],
  exports: [
    HeaderModule,
    SubHeaderModule
  ]
})
export class CoreModule { }
