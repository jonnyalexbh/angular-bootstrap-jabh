import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { AlbumComponent } from './screens/album/album.component';
import { ProductComponent } from './screens/product/product.component';
import { SampleProductComponent } from './screens/sample-product/sample-product.component';
import { MyBillingChartComponent } from './screens/my-billing-chart/my-billing-chart.component';
import { ComparativeChartBillingComponent } from './screens/comparative-chart-billing/comparative-chart-billing.component';
import { ParentComponent } from './screens/parent/parent.component';
import { GetterSetterComponent } from './screens/getter-setter/getter-setter.component';
import { InternationalizationComponent } from './screens/internationalization/internationalization.component';
import { SampleTestingComponent } from './screens/sample-testing/sample-testing.component';
import { ObservableRxjsComponent } from './screens/observable-rxjs/observable-rxjs.component';
import { SampleTestingObserverComponent } from './screens/sample-testing-observer/sample-testing-observer.component';
import { StudentsComponent } from './screens/students/students.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'albums',
    component: AlbumComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'sample-products',
    component: SampleProductComponent,
  },
  {
    path: 'my-billing-chart',
    component: MyBillingChartComponent,
  },
  {
    path: 'comparative-chart-billing',
    component: ComparativeChartBillingComponent,
  },
  {
    path: 'parent-component',
    component: ParentComponent,
  },
  {
    path: 'getter-and-setter',
    component: GetterSetterComponent,
  },
  {
    path: 'internationalization',
    component: InternationalizationComponent,
  },
  {
    path: 'sample-testing',
    component: SampleTestingComponent,
  },
  {
    path: 'testing-obs',
    component: SampleTestingObserverComponent,
  },
  {
    path: 'observable-rxjs',
    component: ObservableRxjsComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
