import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      // animate={isOpen ? "open" : "closed"}
      // variants={variants}
      id="hamburger-nav"
    >
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <motion.div
        // initial={{ x: "100vw", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        id="nav-items"
      >
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Home.</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "active" : ""}>About.</a>
        </Link>
        <Link href="/projects">
          <a className={router.pathname == "/projects" ? "active" : ""}>
            Projects.
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == "/contact" ? "active" : ""}>
            Contact.
          </a>
        </Link>
      </motion.div>
    </nav>
  );
}
