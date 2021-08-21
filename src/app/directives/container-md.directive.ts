import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[containerMd]',
})
export class ContainerMdDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('container-md');
    el.nativeElement.style.display = 'block';
  }
}
