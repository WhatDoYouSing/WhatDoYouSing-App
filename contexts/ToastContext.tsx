import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View } from 'react-native';
import { Toast } from 'components/common';

type ToastType = {
  id: string;
  message: string;
  icon?: string;
};

type ToastContextValue = {
  showToast: (message: string, icon?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToast = (message: string, icon?: string) => {
    const id = Date.now().toString(); // 토스트를 중첩해서 띄우기 위해 고유한 id 생성
    setToasts((prev) => [...prev, { id, message, icon }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <View
        className="absolute w-full px-5 items-center gap-2"
        style={{ bottom: 96, pointerEvents: 'none' }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onHide={() => removeToast(toast.id)}
            icon={toast.icon}
          />
        ))}
      </View>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
