import { SectionTitle } from "#/components/web/section/SectionTitle";
import { EventGrid } from "#/components/web/events/EventGrid";
import { Section } from "#/components/web/section/Section";

export function EventSection() {
  return (
    <Section>
      <SectionTitle title="Termine" />
      <EventGrid />
    </Section>
  );
}
