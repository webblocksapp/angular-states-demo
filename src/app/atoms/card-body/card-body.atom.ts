import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'card-body',
  template: `<ng-content></ng-content>`,
})
export class CardBodyAtom {
  @HostBinding() class: string = 'card-body';
}
