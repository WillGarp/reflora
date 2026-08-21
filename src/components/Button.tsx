import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  secondary?: boolean;
}

export function Button({ children, onClick, secondary = false }: ButtonProps) {
  return (
    <button className={secondary ? "button button-secondary" : "button"} onClick={onClick}>
      {children}
      <ArrowRight size={17} />
    </button>
  );
}