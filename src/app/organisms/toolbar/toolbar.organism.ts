import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'toolbar',
  template: ` <shopping-cart></shopping-cart> `,
})
export class ToolbarOrganism {
  @HostBinding() class =
    'navbar navbar-dark bg-dark text-white d-flex justify-content-end p-2';
}
