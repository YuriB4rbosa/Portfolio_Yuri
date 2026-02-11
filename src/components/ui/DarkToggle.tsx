import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkToggle() {
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
             document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-purple-500 transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-purple-600 w-5 h-5" />
      )}
    </button>
  );
}