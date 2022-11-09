import React, { ReactElement } from 'react';

export interface ButtonHeirarchy {
  secondary?: boolean;
  third?: boolean;
  fourth?: boolean;
}

export default interface DefaultButtonProps extends ButtonHeirarchy {
  children: string | ReactElement;
  url?: string | undefined;
  id?: string;
  disabled?: React.ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}