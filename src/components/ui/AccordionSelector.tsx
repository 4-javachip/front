import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionSelector() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full border-2 border-lightGray-8 rounded-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="padded text-[0.9375rem] text-black hover:no-underline hover:black">
          색상
        </AccordionTrigger>
        <hr />
        <AccordionContent>11</AccordionContent>
        <AccordionContent>22</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
