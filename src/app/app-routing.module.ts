import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { AlbumComponent } from './screens/album/album.component';
import { ProductComponent } from './screens/product/product.component';
import { SampleProductComponent } from './screens/sample-product/sample-product.component';
import { MyBillingChartComponent } from './screens/my-billing-chart/my-billing-chart.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
