import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from sessionStorage", error);
      sessionStorage.removeItem('user');
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const isAdmin = userData.email === 'admin@letsdropship.com';
    const userWithReferral = { 
      ...userData, 
      name: isAdmin ? 'Admin User' : (userData.email === 'testuser@letsdropship.com' ? 'Test User' : userData.email.split('@')[0]),
      referralCode: 'LETSDROP123',
      isMember: true,
      isAdmin: isAdmin,
      subscription: {
        plan: isAdmin ? "Admin Access" : "Starter Plan",
        validUntil: "2025-12-31T00:00:00.000Z",
        importsRemaining: isAdmin ? Infinity : 85,
        importsTotal: isAdmin ? Infinity : 100,
        storeConnected: true,
        storeType: "Shopify"
      }
    };
    sessionStorage.setItem('user', JSON.stringify(userWithReferral));
    setUser(userWithReferral);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  const becomeMember = () => {
    if (user) {
      const updatedUser = { 
        ...user, 
        isMember: true,
        subscription: {
          plan: "Starter Plan",
          validUntil: "2025-09-30T00:00:00.000Z",
          importsRemaining: 85,
          importsTotal: 100,
          storeConnected: true,
          storeType: "Shopify"
        }
      };
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isMember: user?.isMember || false,
    isAdmin: user?.isAdmin || false,
    loading,
    login,
    logout,
    becomeMember,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};