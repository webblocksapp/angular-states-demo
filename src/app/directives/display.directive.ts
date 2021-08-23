import { Directive, ElementRef, Input } from '@angular/core';
import * as CSS from 'csstype';
import { overrideCssClass } from '@app/utils/functions';

@Directive({
  exportAs: 'withDisplay',
  selector: '[display]',
})
export class DisplayDirective {
  @Input()
  set display(value: CSS.Properties['display']) {
    this.setDisplay(value);
  }

  private setDisplay(display: CSS.Properties['display']) {
    overrideCssClass(this.elRef, new RegExp(/^d-/), `d-${display}`);
  }

  constructor(private elRef: ElementRef) {}
}
