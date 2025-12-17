import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion.tsx";
import FAQAPI from "../api/FAQAPI.json";

export default function FAQSection(){
    return(
        <div className="w-full py-10 ">
            <div className="flex flex-col justify-center border-2 border-foreground p-2">
            <h1 className="self-center">
                Frequently Asked Questions
            </h1>
            <div className="my-6">
            {FAQAPI.map((question,i)=>(
            <Accordion type="single" key={i} collapsible >
                <AccordionItem value="item-1" className="bg-white border-2 border-foreground p-2">
                    <AccordionTrigger className="hover:cursor-pointer">{question.question}</AccordionTrigger>
                    <AccordionContent>
                        {question.answer}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            ))}
            </div>
            </div>
        </div>
    )
}