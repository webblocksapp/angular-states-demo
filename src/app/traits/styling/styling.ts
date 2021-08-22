import * as CSS from 'csstype';

export interface Styling {
  class: string;
  style: CSS.Properties;
  initDefaultDisplay: () => void;
}
