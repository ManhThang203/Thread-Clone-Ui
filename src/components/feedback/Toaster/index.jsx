import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      theme="system" // hoặc "dark" / "light"
      className="toaster group"
      position="bottom-center"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)",
      }}
    />
  );
}

export default Toaster;
