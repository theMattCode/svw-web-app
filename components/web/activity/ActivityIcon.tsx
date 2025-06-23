import { ComponentType } from "react";
import "./activity-icon.css";

interface ActivityIconProps {
  Paths: ComponentType;
}

export function ActivityIcon({ Paths }: ActivityIconProps) {
  return (
    <svg className="ActivityIcon" width="100%" height="100%" viewBox="0 0 270 270">
      <g id="Icon">
        <Paths />
      </g>
    </svg>
  );
}
