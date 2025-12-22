"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import styles from "./CreditCard.module.css";

interface CreditCardProps {
  src: string | StaticImageData;
  backSrc?: string | StaticImageData;
  alt?: string;
  backAlt?: string;
}

export default function CreditCard({
  src,
  backSrc,
  alt = "Credit card",
  backAlt = "Credit card back",
}: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = () => {
    if (backSrc) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className={styles.cardContainer} onClick={handleTap}>
      {backSrc && !isFlipped && (
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
        className={styles.cardInner}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <div className={styles.cardFace}>
          <div className={styles.imageWrapper}>
            <Image
              src={src}
              alt={alt}
              fill
              className={styles.cardImage}
              unoptimized
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>
        </div>
        {backSrc && (
          <div className={`${styles.cardFace} ${styles.cardBack}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={backSrc}
                alt={backAlt}
                fill
                className={styles.cardImage}
                unoptimized
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
