import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[container]',
})
export class ContainerDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('container');
    el.nativeElement.style.display = 'block';
  }
}
