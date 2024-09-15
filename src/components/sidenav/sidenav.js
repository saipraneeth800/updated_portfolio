"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronFirst,
  ChevronLast,
  Home,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";

export default function SideNav() {
  const [expanded, setExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setExpanded((curr) => !curr);
  };

  return (
    <motion.aside
      className={cn(
        "fixed top-0 bottom-0 z-50 text-white bg-gray-800",
        isMobile ? "left-0" : "left-0",
        isMobile ? "w-full" : "w-60"
      )}
      animate={{
        width: expanded ? (isMobile ? "100%" : 240) : isMobile ? 0 : 80,
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="h-full flex flex-col items-center justify-between">
        <div className="p-4 flex justify-between items-center">
          <AnimatePresence mode="wait">
            {expanded && !isMobile && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2"
              >
                <Sparkles className="w-8 h-8 text-white" />
                <span className="font-bold text-xl">Portfolio</span>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-800 hover:bg-white transition-colors ml-2"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </Button>
        </div>

        <ul
          className={cn(
            "flex flex-col items-center px-3 py-4 space-y-2",
            isMobile ? (expanded ? "block" : "hidden") : "block"
          )}
        >
          {navItems.map((item, index) => (
            <SidebarItem
              key={item.title}
              item={item}
              expanded={expanded}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              isMobile={isMobile}
            />
          ))}
        </ul>

        <div className="border-t border-gray-700 p-3">
          <div
            className={cn(
              "flex items-center justify-center",
              expanded ? "justify-between" : "flex-col space-y-4 ",
              isMobile && !expanded ? "hidden" : "block"
            )}
          >
            {(!isMobile || expanded) && (
              <>
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-white transition-colors"
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-white transition-colors"
                >
                  <Linkedin size={20} />
                </Button>

                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-white transition-colors"
                >
                  <Twitter size={20} />
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </motion.aside>
  );
}

function SidebarItem({ item, expanded, active, onClick, isMobile }) {
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "relative flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all group",
          "hover:bg-gray-800/50",
          active ? "bg-gray-700 text-gray-200" : "text-indigo-100",
          isMobile && !expanded ? "opacity-0" : "opacity-100"
        )}
        onClick={onClick}
      >
        <motion.div
          className="absolute left-2 w-1.5 h-8 text-gray-800 rounded-full"
          initial={false}
          animate={{
            height: active ? 32 : 0,
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <item.icon
          size={20}
          className={cn("transition-all", expanded ? "mr-4" : "mr-0")}
        />
        <AnimatePresence mode="wait">
          {expanded && (
            <motion.span
              className="whitespace-nowrap"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.span>
          )}
        </AnimatePresence>

        {!expanded && (
          <div
            className={cn(
              "absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-100 text-gray-800 text-sm",
              "invisible opacity-20 -translate-x-3 transition-all",
              "group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
            )}
          >
            {item.title}
          </div>
        )}
      </Link>
    </li>
  );
}

const navItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Projects", icon: Briefcase, href: "/projects" },
  { title: "Profile", icon: User, href: "/profile" },
  { title: "Contact", icon: Mail, href: "/contact" },
];
