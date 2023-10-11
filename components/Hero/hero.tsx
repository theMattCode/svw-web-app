import { club } from "#/content/club";
import { activities } from "#/content/sitemap";
import Link from "next/link";
import Image from "next/image";

export function Hero(): JSX.Element {
  return (
    <div className="md:pt-0 w-full bg-hero bg-cover bg-opacity-10 bg-blend-soft-light">
      <div className="w-full bg-white bg-opacity-80">
        <div className="transition-all container px-4 flex flex-col md:flex-row justify-center items-center">
          <div className="transition-all w-full md:w-1/2 flex flex-col items-center">
            <div className="hidden md:block font-semibold">{club.name}</div>
            <div className="md:hidden pt-4 font-medium">Dein Verein für</div>
            <div className="transition-all font-bold text-5xl md:-translate-x-0.5">
              Breitensport
            </div>
            <div className="py-2">Erlebe gemeinsam mit uns:</div>
            <div className="transition-all flex flex-wrap gap-2 justify-center text-white max-w-md pb-4 ">
              {activities.map((activity) => (
                <Link
                  key={activity.name}
                  href={activity.url}
                  className="transition-all flex items-center px-2 py-1 gap-1 hover:bg-svw-blue-darker whitespace-nowrap bg-svw-blue-default"
                >
                  <span>{activity.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="transition-all hidden md:flex w-1/2">
            <Image
              src="/media/hero/sports.png"
              width={557}
              height={513}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
