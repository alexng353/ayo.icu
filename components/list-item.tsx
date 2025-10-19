import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export function ListItem({ text, icon }: { text: ReactNode; icon: IconType }) {
  return (
    <li className="flex space-x-2 items-center">
      <span>{icon({ className: "h-8 w-8" })}</span>
      <span>{text}</span>
    </li>
  );
}
