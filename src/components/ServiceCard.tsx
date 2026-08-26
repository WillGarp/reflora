import { ArrowRight } from "lucide-react";
import { Service } from "../types";

export function ServiceCard({ icon: Icon, title, text }: Service) {
  return (
    <article className="service-card">
      <div className="icon-box">
        <Icon size={22} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-arrow">
        <ArrowRight size={18} />
      </span>
    </article>
  );
}