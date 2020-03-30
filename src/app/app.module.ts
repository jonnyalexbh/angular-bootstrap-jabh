import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTranslateLoader } from './customTranslateLoader';
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
import { GetterSetterComponent } from './screens/getter-setter/getter-setter.component';
import { ChildOneComponent } from './screens/getter-setter/components/child-one/child-one.component';
import { ChildTwoComponent } from './screens/getter-setter/components/child-two/child-two.component';
import { InternationalizationComponent } from './screens/internationalization/internationalization.component';
import { SampleTestingComponent } from './screens/sample-testing/sample-testing.component';
import { ComparativeChartBillingComponent } from './screens/comparative-chart-billing/comparative-chart-billing.component';
import { ObservableRxjsComponent } from './screens/observable-rxjs/observable-rxjs.component';
import { CardOneComponent } from './screens/observable-rxjs/components/card-one/card-one.component';
import { CardTwoComponent } from './screens/observable-rxjs/components/card-two/card-two.component';
import { SampleTestingObserverComponent } from './screens/sample-testing-observer/sample-testing-observer.component';
import { ListAlbumsComponent } from './screens/sample-testing-observer/components/list-albums/list-albums.component';

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
    ChildEmiterComponent,
    GetterSetterComponent,
    ChildOneComponent,
    ChildTwoComponent,
    InternationalizationComponent,
    SampleTestingComponent,
    ComparativeChartBillingComponent,
    ObservableRxjsComponent,
    CardOneComponent,
    CardTwoComponent,
    SampleTestingObserverComponent,
    ListAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CustomTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
