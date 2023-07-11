import { useState, useEffect } from 'react';

export const useCarousel = (offsetHeight = 420) => {
  const [selectedSegmentId, setSelectedSegmentId] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  useEffect(() => {
    setCarousalOffsetStyle({
      transform: `translateY(${selectedSegmentId * offsetHeight * -1}px)`
    });
  }, [selectedSegmentId, offsetHeight]);

  return { selectedSegmentId, carousalOffsetStyle, setSelectedSegmentId };
};
