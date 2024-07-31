import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const useHoverScroll = (ref: any, height: any) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };

    if (isHovered) {
      handleScroll();
    }
  }, [isHovered, ref]);

  return [isHovered, setIsHovered];
};

export default useHoverScroll;
