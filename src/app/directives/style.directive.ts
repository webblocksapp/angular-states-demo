import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import * as CSS from 'csstype';
import styleToCss from 'style-object-to-css-string';

@Directive({
  selector: '[style]',
})
export class StyleDirective {
  @HostBinding()
  @Input()
  set style(value: CSS.Properties) {
    const style = { ...this.style, ...value };

    if (Object.keys(value).length > 0) {
      this.elRef.nativeElement.style = styleToCss(style);
    }
  }

  constructor(private elRef: ElementRef) {}
}
