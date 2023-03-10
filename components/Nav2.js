import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

export default function Nav2() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return <nav></nav>;
}
