import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './Icons.types';

export const Location: FunctionComponent<IconProps> = ({ height }) => {
  return (
    <Svg width="20" height={height || 40} viewBox="0 0 128 128">
      <Path
        fill="#334257"
        d="M64 0C39.699 0 20 19.699 20 44s44 84 44 84 44-59.699 44-84S88.301 0 64 0zM28 44C28 24.148 44.148 8 64 8s36 16.148 36 36c0 13.828-20.008 47.211-36 70.238C48.008 91.211 28 57.828 28 44zm36-20c-11.047 0-20 8.953-20 20s8.953 20 20 20 20-8.953 20-20-8.953-20-20-20zm0 32c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12z"
      />
    </Svg>
  );
};
