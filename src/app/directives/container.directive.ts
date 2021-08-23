import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[container]',
})
export class ContainerDirective {
  constructor(el: ElementRef) {
    const elementClassList = el.nativeElement.classList;
    elementClassList.add('container');
    elementClassList.add('d-block');
  }
}
