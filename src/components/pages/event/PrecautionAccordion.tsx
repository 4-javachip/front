import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordions/accordion';

export default function PrecautionAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible defaultValue="item" className="w-full">
      <AccordionItem value="item">
        <AccordionTrigger
          className="text-base font-semibold text-gray-1 hover:text-gray-1 
        padded
        hover:no-underline "
        >
          {title}
        </AccordionTrigger>
        <AccordionContent className="bg-lightGray-2">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
