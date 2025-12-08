import { useState, useEffect } from 'react';

function useScroll() {
  // State variables
  const [isSticky, setIsSticky] = useState(false);
  const [nextSectionTop, setNextSectionTop] = useState(0);
  const [lastContainerBottom, setLastContainerBottom] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);
  const [offset5, setOffset5] = useState(0);

  const hideThreshold = 100;

  // Debounce function
  const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
    let timeout: NodeJS.Timeout | null = null; // Type for timeout
    return function (this: any, ...args: Parameters<T>) { // Type for 'this'
      const context = this; // context will now have the correct type
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  };
  
  

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const stickyAnchor = document.getElementById('sticky-anchor');
      const nextSection = document.getElementById('next-section');
      const lastContainer = document.getElementById('last-container');

      if (!stickyAnchor || !nextSection || !lastContainer) return;

      const stickyTop = stickyAnchor.getBoundingClientRect().top;
      const newNextSectionTop = nextSection.getBoundingClientRect().top;
      const newLastContainerBottom = lastContainer.getBoundingClientRect().bottom;

      // Update sticky state
      const newIsSticky = stickyTop <= 30;
      const newIsHidden = newLastContainerBottom < window.innerHeight + hideThreshold;

      // Update states only if there's a change
      if (newIsSticky !== isSticky) {
        setIsSticky(newIsSticky);
      }
      if (newIsHidden !== isHidden) {
        setIsHidden(newIsHidden);
      }

      // Update positions
      setNextSectionTop(newNextSectionTop);
      setLastContainerBottom(newLastContainerBottom);
    };

    // Handle resize event
    const handleResize = () => {
      setOffset1(calculateOffset('scrollspyHeading1') ?? 0); // Fallback to 0 if undefined
      setOffset2(calculateOffset('scrollspyHeading2') ?? 0);
      setOffset3(calculateOffset('scrollspyHeading3') ?? 0);
      setOffset4(calculateOffset('scrollspyHeading4') ?? 0);
      setOffset5(calculateOffset('scrollspyHeading5') ?? 0);
    };

    // Debounced version of handleScroll
    const debouncedHandleScroll = debounce(handleScroll, 50);

    // Initial resize call
    handleResize();

    // Event listeners
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSticky, isHidden]); // Add necessary dependencies if required

  // Calculate offsets based on screen width
  const calculateOffset = (section: string) => {
    const screenWidth = window.innerWidth;
    let offset;

    if (screenWidth < 768) {
      offset = -350; // Common offset for small screens
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      offset = -350; // Common offset for medium screens
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      offset = -260; // Common offset for large screens
    } else if (screenWidth >= 1280) {
      offset = -350; // Common offset for extra-large screens
    }

    // Override specific offsets
    switch (section) {
      case 'scrollspyHeading1':
        return offset;
      case 'scrollspyHeading2':
        return -310;
      case 'scrollspyHeading3':
        return -150;
      case 'scrollspyHeading4':
        return -150;
      case 'scrollspyHeading5':
        return -180;
      default:
        return -100; // Default offset
    }
  };

  return { isSticky, nextSectionTop, lastContainerBottom, isHidden, offset1, offset2, offset3, offset4, offset5 };
}

export default useScroll;