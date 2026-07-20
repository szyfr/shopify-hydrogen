import {Mail} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/funnel/ui/accordion';
import {Button} from '~/components/funnel/ui/button';

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({
  eyebrow,
  heading,
  items = [],
  contactPrompt = 'Still have questions about a piece, a bulk order, or delivery to your venue?',
  contactEmail = 'customerservice@universalstatuesgroup.com',
}: {
  eyebrow?: string | null;
  heading: string;
  items?: FaqItem[];
  contactPrompt?: string | null;
  contactEmail?: string | null;
}) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[820px] flex-col gap-8 px-5 py-14 sm:px-10 lg:py-18">
        <div className="flex flex-col items-center gap-2.5 text-center">
          {eyebrow && (
            <span className="font-heading text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-[28px] leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
        </div>

        {items.length > 0 && (
          // Single-open accordion; the first item starts open.
          <Accordion defaultValue={[items[0].question]} className="gap-3">
            {items.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="overflow-hidden rounded-lg border border-border bg-white"
              >
                <AccordionTrigger className="items-center gap-4 px-5 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        {contactEmail && (
          <div className="flex flex-col items-center gap-3.5 pt-1.5 text-center">
            {contactPrompt && (
              <span className="text-[15px] leading-relaxed text-muted-foreground">
                {contactPrompt}
              </span>
            )}
            <Button
              size="xl"
              nativeButton={false}
              render={
                <a href={`mailto:${contactEmail}`}>
                  <Mail data-icon="inline-start" />
                  Contact our team
                </a>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
