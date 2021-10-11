import React, { FunctionComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './Icons.types';

export const Trash: FunctionComponent<IconProps> = ({ height }) => {
  return (
    <Svg height={height || 40} width="100%" viewBox="0 0 100 100">
      <G fillRule="nonzero" fill="#000000">
        <Path d="M86,24H75H64v-5.9c0-3.9-3.2-7.1-7.1-7.1H43.1c-3.9,0-7.1,3.2-7.1,7.1V24H25H14c-1.1,0-2,0.9-2,2s0.9,2,2,2h9v49.2   c0,5.4,4.4,9.8,9.8,9.8h34.4c5.4,0,9.8-4.4,9.8-9.8V28h9c1.1,0,2-0.9,2-2S87.1,24,86,24z M40,18.1c0-1.7,1.4-3.1,3.1-3.1h13.7   c1.7,0,3.1,1.4,3.1,3.1V24H40V18.1z M73,77.2c0,3.2-2.6,5.8-5.8,5.8H32.8c-3.2,0-5.8-2.6-5.8-5.8V28h11h24h11V77.2z"/>
        <Path d="M50,38c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2s2-0.9,2-2V40C52,38.9,51.1,38,50,38z"/>
        <Path d="M40,38c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2s2-0.9,2-2V40C42,38.9,41.1,38,40,38z"/>
        <Path d="M60,38c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2s2-0.9,2-2V40C62,38.9,61.1,38,60,38z"/>
      </G>
    </Svg>
  );
};