'use client'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {useState} from "react";

type IconProps = {
    id: number
    open: number
}

function Icon({id, open}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
    );
}

export default function About() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <main className="flex flex-col">
            <section className="flex-1 flex flex-col pb-20">
                <div className="container">
                    <h1 className="text-center text-4xl font-semibold">FAQ page</h1>
                    {/*<div className="flex-1 flex flex-col justify-center">*/}
                    {/*    <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(1)}>What is*/}
                    {/*            Material Tailwind?</AccordionHeader>*/}
                    {/*        <AccordionBody className={"overflow-hidden max-w-3xl flex m-auto"}>*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(2)}>*/}
                    {/*            How to use Material Tailwind?*/}
                    {/*        </AccordionHeader>*/}
                    {/*        <AccordionBody className="max-w-3xl flex m-auto">*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 3} icon={<Icon id={3} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(3)}>*/}
                    {/*            What can I do with Material Tailwind?*/}
                    {/*        </AccordionHeader>*/}
                    {/*        <AccordionBody className="max-w-3xl flex m-auto">*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 4} icon={<Icon id={4} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(4)}>What is*/}
                    {/*            Material Tailwind?</AccordionHeader>*/}
                    {/*        <AccordionBody className="max-w-3xl flex m-auto">*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 5} icon={<Icon id={5} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(5)}>*/}
                    {/*            How to use Material Tailwind?*/}
                    {/*        </AccordionHeader>*/}
                    {/*        <AccordionBody className="max-w-3xl flex m-auto">*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 6} icon={<Icon id={6} open={open}/>}>*/}
                    {/*        <AccordionHeader className="max-w-3xl flex m-auto" onClick={() => handleOpen(6)}>*/}
                    {/*            What can I do with Material Tailwind?*/}
                    {/*        </AccordionHeader>*/}
                    {/*        <AccordionBody className="max-w-3xl flex m-auto">*/}
                    {/*            We&apos;re not always in the position that we want to be at. We&apos;re constantly*/}
                    {/*            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express*/}
                    {/*            ourselves and actualize our dreams.*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*</div>*/}
                </div>
            </section>
        </main>
    );
}
