import type { FC } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContactItemProps {
  children: ReactNode;
  href?: string;
}

const ContactItem: FC<ContactItemProps> = ({ children, href }) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300"
    >
      {children}
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default ContactItem;
