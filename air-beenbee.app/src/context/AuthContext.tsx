import React, { createContext, useContext, useState } from 'react';

interface User {
    name: string;
    type: 'locataire' | 'proprietaire';
    email: string;
    username: string;
    id: number;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextType {
  authState: AuthState;
  setAuthState: (state: AuthState) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
