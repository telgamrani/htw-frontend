import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { LookListModule } from './modules/look-list/look-list.module';
import { LookDetailModule } from './modules/look-detail/look-detail.module';
import { RoutingModule } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    CoreModule,
    LookListModule,
    LookDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
