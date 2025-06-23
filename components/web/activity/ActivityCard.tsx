import Link from "next/link";
import type { JSX } from "react";

export interface Activity {
  name: string;
  url: string;
  new?: boolean;
  icon: JSX.Element;
}

export interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      href={activity.url}
      className="w-32 transition-all flex flex-col items-center justify-center scale-100 @xl:hover:scale-105 hover:shadow-md bg-white"
    >
      <div className="w-full p-4">{activity.icon}</div>
      <div className="w-full flex justify-center p-2 hover:bg-svw-blue-darker bg-svw-blue-dark text-white uppercase font-bold whitespace-nowrap text-sm">
        {activity.name}
      </div>
      {activity.new && <div className="absolute top-0 right-0 px-2 py-1 text-xl">✨</div>}
    </Link>
  );
}
