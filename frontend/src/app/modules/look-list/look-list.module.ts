import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LookListComponent } from './components/look-list/look-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LookListComponent],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [
    LookListComponent
  ]
})
export class LookListModule { }
