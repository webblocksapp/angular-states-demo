import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[row]',
})
export class RowDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('row');
    el.nativeElement.style.display = 'flex';
  }
}
