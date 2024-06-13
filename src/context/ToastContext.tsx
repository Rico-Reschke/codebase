'use client';

import React, { ReactNode, createContext, useContext } from 'react';
import { Toaster, toast } from 'sonner';

interface ToastContextType {
  notify: (message: string, type: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const notify = (
    message: string,
    type: 'success' | 'error' | 'info',
    duration = 10000
  ) => {
    toast[type](message, {
      duration,
    });
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  );
};
