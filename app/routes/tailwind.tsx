import { LoaderFunction } from "@remix-run/node";
import { serveTailwindCss } from "remix-tailwind";
import styles from "~/styles/app.css";

export const loader: LoaderFunction = () => serveTailwindCss(styles);
