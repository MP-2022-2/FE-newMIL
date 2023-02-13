import React from 'react';

type ToastTypes = 'error' | 'warn' | 'Success';

export interface ToastProps {
  type: ToastTypes;
  message: string;
  timeout?: number | 2000;
}

export type ToastPortalFunction = ({
  children,
}: {
  children: React.ReactNode;
}) => React.ReactPortal;
export type ToastFunction = (props: ToastProps) => React.ReactElement;
