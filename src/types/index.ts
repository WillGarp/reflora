import { LucideIcon } from "lucide-react";

export type Page = "home" | "servicos" | "florestas" | "fogo" | "clientes" | "sobre" | "contato";

export interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Client {
  icon: LucideIcon;
  title: string;
  text: string;
  tag: string;
}