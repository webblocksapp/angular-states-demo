import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsScreen } from '@app/screens';
import { BlankScreen } from './screens/blank.screen';

const routes: Routes = [
  { path: '', component: ProductsScreen },
  { path: 'blank', component: BlankScreen },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
