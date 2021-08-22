import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';

export interface Display {
  display: CSS.Properties['display'];
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display: CSS.Properties['display']
  ) => void;
}
