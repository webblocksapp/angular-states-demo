import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsScreen } from '@screens/products/products.screen';

const routes: Routes = [{ path: '', component: ProductsScreen }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
