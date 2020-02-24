import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductComponent } from './screens/product/product.component';
import { AlbumComponent } from './screens/album/album.component';
import { SampleProductComponent } from './screens/sample-product/sample-product.component';
import { ChartModule } from 'angular-highcharts';
import { MyBillingChartComponent } from './screens/my-billing-chart/my-billing-chart.component';
import { ParentComponent } from './screens/parent/parent.component';
import { ChildReceiverComponent } from './screens/parent/components/child-receiver/child-receiver.component';
import { ChildEmiterComponent } from './screens/parent/components/child-emiter/child-emiter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductComponent,
    AlbumComponent,
    SampleProductComponent,
    MyBillingChartComponent,
    ParentComponent,
    ChildReceiverComponent,
    ChildEmiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
