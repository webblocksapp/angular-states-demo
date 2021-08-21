import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';
import styleToCss from 'style-object-to-css-string';

export class StylingElectron {
  public class: string;

  set style(value: CSS.Properties) {
    const style = { ...this.style, ...value };

    if (Object.keys(value).length > 0)
      this.elRef.nativeElement.style = styleToCss(style);
  }

  constructor(private elRef: ElementRef) {
    this.initDefaultDisplay();
  }

  private initDefaultDisplay(): void {
    this.style = !this.class && !this.style ? { display: 'block' } : {};
  }
}
