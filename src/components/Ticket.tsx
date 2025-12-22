import { Box, Text } from "@radix-ui/themes";
import styles from "./Ticket.module.css";

interface TicketProps {
  children: React.ReactNode;
}

export default function Ticket({ children }: TicketProps) {
  return (
    <Box className={styles.ticket}>
      <div className={styles.ticketLeft}>
        <div className={styles.ticketNotch} />
      </div>
      <div className={styles.ticketContent}>
        <Text size="3" className={styles.ticketText}>
          {children}
        </Text>
      </div>
      <div className={styles.ticketRight}>
        <div className={styles.ticketNotch} />
      </div>
    </Box>
  );
}

