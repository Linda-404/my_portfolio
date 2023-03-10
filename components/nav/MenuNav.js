import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuList from "./MenuList";

const variants = {
  open: { y: 50 },
  closed: { y: 0 },
};

export default function MenuNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div>
        <MenuToggle toggle={() => toggleOpen()} />
        <MenuList />
      </motion.div>
    </motion.nav>
  );
}
