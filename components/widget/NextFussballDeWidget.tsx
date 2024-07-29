"use client";

import React, { JSX } from "react";

type Props = {
  widgetId: string;
  type: "club-matches" | "team-matches" | "table";
};

/**
 * The documented way. The problem: We can't use two widgets on one page yet.
 * Needs this script in the head of the page:
 * <script async type="text/javascript" src="https://www.fussball.de/widgets.js" />
 */
export function NextFussballDeWidget({ widgetId, type }: Props): JSX.Element {
  return <div className="container flex justify-center fussballde_widget" data-id={widgetId} data-type={type} />;
}

/**
 * The undocumented way. We access the content directly and can use multiple widgets on one page.
 * The URL pattern is: https://next.fussball.de/widget/{type}/{widgetId}. Since it might change at any time and notice, the widget may break.
 */
export function NextFussballDeIframeWidget({ widgetId, type }: Props): JSX.Element {
  return (
    <div className="container flex justify-center">
      <iframe className="w-full" height="1520" src={`//next.fussball.de/widget/${type}/${widgetId}`} />
    </div>
  );
}

// https://next.fussball.de/widget/table/fd5c08aa-dbe8-4bea-b8d1-79d912931414
