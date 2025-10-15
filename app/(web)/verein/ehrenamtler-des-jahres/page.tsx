import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { ehrenamtlerDesJahres } from "#/content/sitemap";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { EhrenamtlerForm } from "#/components/form/EhrenamtlerForm";

export const metadata: Metadata = {
  title: getTitle(ehrenamtlerDesJahres.name),
};

export default function EhrenamtlerDesJahres() {
  return (
    <PageContent>
      <SectionTitle title={ehrenamtlerDesJahres.name} />
      <div className="flex flex-col gap-4">
        <p>Schlage einen Ehrenamtler des Jahres vor und beschreibe kurz warum er eine Auszeichnung verdient hat.</p>
        <EhrenamtlerForm />
      </div>
    </PageContent>
  );
}
