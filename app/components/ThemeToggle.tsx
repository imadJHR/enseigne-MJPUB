"use client";
import { useTheme } from "@/app/context/ThemeContext";
import { Sun, Moon } from "@/components/Icons";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={dark ? "Passer au mode clair" : "Passer au mode sombre"}
      aria-pressed={dark}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
