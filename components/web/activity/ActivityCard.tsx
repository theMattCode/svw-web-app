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
      className="w-32 @xl:w-48 transition-all flex flex-col items-center justify-center scale-100 hover:scale-105 hover:shadow-md bg-white @xl:m-4"
    >
      <div className="w-full p-4">{activity.icon}</div>
      <div className="w-full flex justify-center p-2 hover:bg-svw-blue-darker bg-svw-blue-dark text-white uppercase font-bold whitespace-nowrap text-sm @xl:text-base">
        {activity.name}
      </div>
      {activity.new && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs @xl:text-base uppercase font-bold px-2 py-1">
          Neu
        </div>
      )}
    </Link>
  );
}
