import Link from "next/link";
import { ComponentProps, PropsWithChildren, type JSX } from "react";
import { UrlObject } from "url";

type Props = Omit<PropsWithChildren<ComponentProps<typeof Link>>, "href"> & {
  href: string | UrlObject | undefined | null;
};

export function OptionalLink({ href, children, ...props }: Props): JSX.Element {
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return <div className={props.className}>{children}</div>;
}
