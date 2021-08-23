import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[row]',
})
export class RowDirective {
  constructor(el: ElementRef) {
    const elementClassList = el.nativeElement.classList;
    elementClassList.add('row');
    elementClassList.add('d-flex');
  }
}
