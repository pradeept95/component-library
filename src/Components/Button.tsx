import React from 'react';

export interface ButtonProps {
   label: string;
   onClick: () => void;
}

export const Button = (props: ButtonProps) => {
   return (<>
      <button {...props} onClick={props.onClick} style={{padding: 5}}>{props.label}</button>
   </>);
};
