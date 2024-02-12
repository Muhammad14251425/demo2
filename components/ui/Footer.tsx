import Logo from "@/app/components/Navbar/Logo"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const footer = [
    {
        heading: "Support Center",
        part1: "Customer Support",
        part2: "Speak to a Bird Specialist",
        part3: "",
    },
    {
        heading: "More Information",
        part1: "Terms and Conditions",
        part2: "Careers at Bird",
        part3: "Integrations",
    },
    {
        heading: "My Account",
        part1: "Login",
        part2: "Create Account",
        part3: "Permissions",
    },
    {
        heading: "Policy",
        part1: "Terms and Conditions",
        part2: "Policy and Privacy",
        part3: "",
    },
]
const Footer = () => {
    return (
        <div className=' bg-slate-400/15'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-24 md:gap-x-[480px] lg:gap-x-[600px] xl:gap-x-[700px] 2xl:gap-x-[960px] px-2">
               
                <Logo />
               
                <h2 className="text-sm font-semibold">Muhammad Fawwad Ahmed</h2>
            </div>
            <div className="md:hidden p-1">
                <Accordion type="single" collapsible className="w-full">
                    {
                        footer.map((item, index) => (
                            <AccordionItem key={index} value={item.heading}>
                                <AccordionTrigger >{item.heading}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-y-6 pt-2 bg-white  ">
                                    <p className="hover:underline" >{item.part1}</p>
                                    <p className="hover:underline" >{item.part2}</p>
                                    <p className="hover:underline" >{item.part3}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>
            </div>
            <div className='hidden md:flex justify-evenly'>
                {
                    footer.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-6  pt-8 ">
                            <h2 className="text-xl">{item.heading}</h2>
                            <p>{item.part1}</p>
                            <p>{item.part2}</p>
                            <p>{item.part3}</p>
                        </div>
                    ))}
            </div>


            <h2 className="text-center py-8">All Rights Reserved, Bird Inc. 2024</h2>

        </div>
    )
}

export default Footer