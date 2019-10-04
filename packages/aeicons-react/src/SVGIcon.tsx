import React from 'react';

const SVGIcon: any = ({ fill, height, path, viewBox, width, xmlns }: any) => {
  return (
      <svg
        fill={fill}
        height={height}
        viewBox={viewBox}
        width={width}
        xmlns={xmlns}
      >
        {path && path.map((d: any, i: any) => <path d={d} key={i} />)}
      </svg>
  )
};

export default SVGIcon;