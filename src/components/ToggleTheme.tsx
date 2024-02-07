import { useTheme } from "@/hooks/useTheme";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        id="toggleBtn"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="slider round" />
    </label>
  );
};

export default ToggleTheme;
