import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); 
  
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark'); 
    root.classList.toggle('light', theme === 'light'); 
  }, [theme]); 

  return [theme, setTheme] as const; 
};

export default useTheme;
