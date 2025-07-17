import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type LPDuvidasItemProps = {
  value: string;
  title: string;
  children: ReactNode;
};

function LPDuvidasItem({ value, title, children }: LPDuvidasItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="font-semibold text-lg hover:underline-none no-underline hover:no-underline">{title}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

type LPDuvidasRootProps = {
  children: ReactNode;
};

function LPDuvidasRoot({ children }: LPDuvidasRootProps) {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-bold text-center">Dúvidas e Perguntas Frequentes</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {children}
      </Accordion>
    </div>
  );
}

const LPDuvidas = {
  Root: LPDuvidasRoot,
  Item: LPDuvidasItem,
};

export { LPDuvidas };
