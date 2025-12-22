"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Heading } from "@radix-ui/themes";
import Ticket from "./Ticket";
import styles from "./TicketSlide.module.css";

interface TicketSlideProps {
  title: string;
  tickets: string[];
}

export default function TicketSlide({ title, tickets }: TicketSlideProps) {
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [showBottomShadow, setShowBottomShadow] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);

  useEffect(() => {
    // On mount, initialize lastScrollTimeRef.current to the current time
    lastScrollTimeRef.current = Date.now();
  }, []);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;

    const hasScrolled = scrollTop > 5;
    const hasMoreBelow = scrollTop + clientHeight < scrollHeight - 5;

    setShowTopShadow(hasScrolled);
    setShowBottomShadow(hasMoreBelow);

    // Reset inactivity timer on scroll
    lastScrollTimeRef.current = Date.now();
    setShowScrollHint(false);

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Only show hint if there's more content below and user hasn't scrolled
    if (hasMoreBelow) {
      inactivityTimerRef.current = setTimeout(() => {
        const timeSinceLastScroll = Date.now() - lastScrollTimeRef.current;
        if (timeSinceLastScroll >= 5000) {
          setShowScrollHint(true);
        }
      }, 5000);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial check
    checkScroll();

    // Check on scroll
    const handleScroll = () => {
      checkScroll();
    };
    container.addEventListener("scroll", handleScroll, { passive: true });

    // Check on resize
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(checkScroll, 0);
    });
    resizeObserver.observe(container);

    // Also check after a short delay to ensure content is rendered
    const timeoutId = setTimeout(checkScroll, 100);

    // Set initial inactivity timer
    const initialTimer = setTimeout(() => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          scrollContainerRef.current;
        const hasMoreBelow = scrollTop + clientHeight < scrollHeight - 5;
        if (hasMoreBelow) {
          setShowScrollHint(true);
        }
      }
    }, 5000);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(initialTimer);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [tickets]);

  return (
    <Box className={styles.ticketSlideContent}>
      <Heading size="8" className={styles.title}>
        {title}
      </Heading>
      <div className={styles.ticketListWrapper}>
        {showTopShadow && <div className={styles.scrollShadowTop} />}
        <div ref={scrollContainerRef} className={styles.ticketList}>
          {tickets.map((ticket, index) => (
            <Ticket key={index}>{ticket}</Ticket>
          ))}
        </div>
        {showBottomShadow && (
          <div className={styles.scrollShadowBottom}>
            {showScrollHint && (
              <div className={styles.scrollHint}>
                <div className={styles.scrollHintArrow}>↓</div>
              </div>
            )}
          </div>
        )}
      </div>
    </Box>
  );
}
