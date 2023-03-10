import { motion } from "framer-motion";

export default function MenuToggle({ toggle }) {
  return (
    <button className="navbtn" onClick={toggle}>
      menu
    </button>
  );
}
