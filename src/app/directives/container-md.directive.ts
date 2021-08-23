import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[containerMd]',
})
export class ContainerMdDirective {
  constructor(el: ElementRef) {
    const elementClassList = el.nativeElement.classList;
    elementClassList.add('container-md');
    elementClassList.add('d-block');
  }
}
