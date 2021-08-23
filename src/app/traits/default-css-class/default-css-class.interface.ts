import { ElementRef } from '@angular/core';

export interface DefaultCssClass {
  class: string;
  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;
}
