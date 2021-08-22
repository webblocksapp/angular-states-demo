import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';

export interface Styling {
  class: string;
  style: CSS.Properties;
  initElRef: (elRef: ElementRef) => void;
}
