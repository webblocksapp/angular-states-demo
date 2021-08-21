import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product';

@Component({
  selector: 'product-card',
  template: ``,
})
export class ProductCardMolecule {
  @Input() product: Product;
}
