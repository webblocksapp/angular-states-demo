import { overrideCssClass } from './override-css-class';
import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';

export const setDefaultDisplay = (
  hostElRef: ElementRef,
  display: CSS.Properties['display']
) => {
  const element = hostElRef.nativeElement;
  const currentClasses = element.classList.toString().split(' ');

  const foundClass = currentClasses.find((className: string) =>
    className.match(/^d-/)
  );

  if (foundClass) {
    return;
  }

  overrideCssClass(hostElRef, new RegExp(/^d-/), `d-${display}`);
};
