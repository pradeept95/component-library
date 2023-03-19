import React from 'react';

export interface ButtonProps {
   label?: string;
   name? : string;
   onClick?: () => void;
}

export const Button = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
   return (<>
      <button {...props} onClick={props.onClick} style={{padding: 5}}>{props.label}</button>
   </>);
};
