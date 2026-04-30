import { useTheme } from "../context/ThemeContext";
import { DATA } from "../data";

export default function Topbar() {
  const { theme, toggle } = useTheme();
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="status-dot" />
        <span>{DATA.handle}</span>
        <span className="topbar-pid">· {DATA.pid}</span>
      </div>
      <button className="theme-btn" onClick={toggle}>
        [{theme === "light" ? "dark" : "light"}]
      </button>
    </div>
  );
}
