import { useState, useEffect, useCallback } from "react";

interface HookStateInterface {
  scrollX: number;
  scrollY: number;
  scrollHorizontalDirection: string;
  scrollVerticalDirection: string;
};

type CallbackFunction = (event: Event) => void;

export default function useScroll() {
  if (typeof window === "undefined") {
    return {
      scrollX: 0,
      scrollY: 0,
      scrollHorizontalDirection: "",
      scrollVerticalDirection: ""
    };
  }

  const [state, setState] = useState<HookStateInterface>(() => {
    const bodyOffset = document.body.getBoundingClientRect();

    return {
      scrollX: bodyOffset.left,
      scrollY: bodyOffset.top,
      scrollHorizontalDirection: "",
      scrollVerticalDirection: ""
    }
  });

  const handleScrollEvent = useCallback<CallbackFunction>(() => {
    setState(prevState => {
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        scrollX: bodyOffset.left,
        scrollY: -bodyOffset.top,
        scrollHorizontalDirection: prevState.scrollX > bodyOffset.left ? "right" : "left",
        scrollVerticalDirection: prevState.scrollY > -bodyOffset.top ? "up" : "down"
      }
    });
  }, []);

  useEffect(() => {
    const scrollListener = (event: Event) => handleScrollEvent(event);

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScrollEvent]);

  return {
    scrollX: state.scrollX,
    scrollY: state.scrollY,
    scrollHorizontalDirection: state.scrollHorizontalDirection,
    scrollVerticalDirection: state.scrollVerticalDirection
  };
}