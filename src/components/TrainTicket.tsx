"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TrainTicket.module.css";

export default function TrainTicket() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.ticketContainer} onClick={handleTap}>
      {!isFlipped && (
        <motion.div
          className={styles.tapHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Tik om te draaien 👆
        </motion.div>
      )}
      <motion.div
        className={styles.ticketInner}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <div className={styles.ticketFace}>
          <div className={styles.ticketContent}>
            <div className={styles.ticketLeft}>
              <div className={styles.sideText}>6137042598</div>
            </div>
            <div className={styles.ticketCenter}>
              <div
                className={`${styles.contentWrapper} ${styles.contentWrapperFront}`}
              >
                REISTICKET
              </div>
            </div>
            <div className={styles.ticketRight}>
              <div className={styles.sideText}>6137042598</div>
            </div>
          </div>
        </div>

        <div className={`${styles.ticketFace} ${styles.ticketBack}`}>
          <div className={styles.ticketContent}>
            <div className={styles.ticketLeft}>
              <div className={styles.sideText}>6137042598</div>
            </div>
            <div className={styles.ticketCenter}>
              <div className={styles.contentWrapper}>
                <div>
                  <strong>Van:</strong> Lommel
                </div>
                <div>
                  <strong>Naar:</strong> Je volgende avonturen
                </div>
              </div>
            </div>
            <div className={styles.ticketRight}>
              <div className={styles.sideText}>6137042598</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
