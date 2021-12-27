import { ElementRef } from '@angular/core';
import { TypographyComponent } from '@app-types';
import { DISPLAY_BLOCK_COMPONENTS, TYPOGRAPHY_CLASSES } from '@constants';
import * as CSS from 'csstype';
import { setDefaultDisplay } from './set-default-display';

export const setTypographyClass = (
  hostElRef: ElementRef,
  typographyComponent?: TypographyComponent,
  display?: CSS.Properties['display']
) => {
  const elementClassList = hostElRef.nativeElement.classList;

  Object.values(TYPOGRAPHY_CLASSES).forEach((className) => {
    elementClassList.remove(className);
  });

  const isDisplayBlock = DISPLAY_BLOCK_COMPONENTS.includes(
    typographyComponent || ''
  );

  if (isDisplayBlock) {
    setDefaultDisplay(hostElRef, 'block');
  } else {
    setDefaultDisplay(hostElRef, display || 'inline');
  }

  elementClassList.add(TYPOGRAPHY_CLASSES[typographyComponent || 'p']);
};
