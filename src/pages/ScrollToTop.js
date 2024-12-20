// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the route changes
  }, [location]);

  return null; // This component doesn’t render anything to the UI
};

export default ScrollToTop;
