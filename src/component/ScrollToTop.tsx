import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Method 1: Standard scroll
    window.scrollTo(0, 0);
    
    // Method 2: Alternative methods as backup
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Method 3: Using scrollIntoView
    document.body.scrollIntoView({ behavior: 'smooth' });
    
    console.log('Scrolled to top for:', pathname);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;