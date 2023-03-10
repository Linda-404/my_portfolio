import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const variants = {
  open: { y: 0, opacity: 1, transition: 0.75 },
  closed: { y: "-100vw", opacity: 0, transition: 0.75 },
};

const route = ["/", "/about", "/projects", "/contact"];

const linkName = ["Home", "About", "Projects", "Contact"];

export default function MenuItem({ i }) {
  const router = useRouter();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={route[i]}>
        <a className={router.pathname == route[i] ? "active" : ""}>
          {linkName[i]}
        </a>
      </Link>
    </motion.li>
  );
}
