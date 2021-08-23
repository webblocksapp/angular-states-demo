import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { BoxAtom } from '@app/atoms/box/box.atom';
import { BrowserModule } from '@angular/platform-browser';
import { CardAtom } from '@app/atoms/card/card.atom';
import { CardBodyAtom } from '@app/atoms/card-body/card-body.atom';
import { CommonModule } from '@angular/common';
import { ContainerDirective } from '@app/directives/container.directive';
import { DefaultTemplate } from '@app/templates/default/default.template';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductsScreen } from '@screens/products/products.screen';
import { RowDirective } from '@app/directives/row.directive';
import { ShoppingCartMolecule } from '@molecules/shopping-cart/shopping-cart.molecule';
import { ToolbarOrganism } from '@organisms/toolbar/toolbar.organism';
import { ColDirective } from '@directives/col.directive';
import { ContainerFluidDirective } from '@directives/container-fluid.directive';
import { ContainerMdDirective } from '@directives/container-md.directive';
import { SpacingDirective } from '@directives/spacing.directive';
import { DisplayDirective } from '@directives/display.directive';
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxAtom,
    CardAtom,
    CardBodyAtom,
    ContainerDirective,
    SpacingDirective,
    DisplayDirective,
    DefaultTemplate,
    ProductsScreen,
    RowDirective,
    ShoppingCartMolecule,
    ToolbarOrganism,
    ColDirective,
    ContainerFluidDirective,
    ContainerMdDirective,
    StyleDirective,
  ],
  imports: [AppRoutingModule, BrowserModule, CommonModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
