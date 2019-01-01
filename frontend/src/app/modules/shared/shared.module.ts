import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookComponent } from './components/look/look.component';
import { ArticleComponent } from './components/article/article.component';
import { RoutingModule } from '../routing/routing.module';
import { TitleCenterComponent } from './components/title-center/title-center.component';

@NgModule({
  declarations: [LookComponent, ArticleComponent, TitleCenterComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    LookComponent,
    ArticleComponent,
    TitleCenterComponent
  ]
})
export class SharedModule { }
