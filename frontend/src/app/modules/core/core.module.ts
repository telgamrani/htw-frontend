import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './modules/header/header.module';
import { SubHeaderModule } from './modules/sub-header/sub-header.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    SubHeaderModule,
    FooterModule
  ],
  exports: [
    HeaderModule,
    SubHeaderModule,
    FooterModule
  ]
})
export class CoreModule { }
