"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
export type Theme = "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);
export const themeStorageKey = "mjpub-theme";
function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    setThemeState(next);
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      /* The switch remains available without persistent storage. */
    }
  }, []);
  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setThemeState(current === "dark" ? "dark" : "light");
    const storageChange = (event: StorageEvent) => {
      if (event.key !== null && event.key !== themeStorageKey) return;
      const next = event.newValue === "dark" ? "dark" : "light";
      applyTheme(next);
      setThemeState(next);
    };
    window.addEventListener("storage", storageChange);
    return () => {
      window.removeEventListener("storage", storageChange);
    };
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeProvider is required");
  return context;
}
