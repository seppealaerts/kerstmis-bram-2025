"use client";

import { Box, Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import styles from "./Slide.module.css";

interface SlideProps {
  children?: React.ReactNode;
  emoji?: string;
  title?: string;
  emojiAnimation?: string;
}

export default function Slide({
  children,
  emoji,
  title,
  emojiAnimation,
}: SlideProps) {
  const isString = typeof children === "string";

  const emojiContent = emoji ? (
    emojiAnimation === "wave" ? (
      <motion.div
        className={`${styles.emoji} ${styles.emojiAnimated}`}
        animate={{
          rotate: [0, 14, -14, 14, -14, 14, -14, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        {emoji}
      </motion.div>
    ) : (
      <div className={styles.emoji}>{emoji}</div>
    )
  ) : null;

  return (
    <Box className={styles.slideContent}>
      {emojiContent}
      {title && (
        <Heading size="7" className={styles.title}>
          {title}
        </Heading>
      )}
      {isString ? (
        <Text size="4" className={styles.body}>
          {children}
        </Text>
      ) : (
        <div className={styles.body}>{children}</div>
      )}
    </Box>
  );
}
