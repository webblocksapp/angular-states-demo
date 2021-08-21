import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
    <box class="dropdown dropstart">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <i class="bi bi-cart"></i>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">Test</a>
        </li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </box>
  `,
})
export class ShoppingCartMolecule {}
