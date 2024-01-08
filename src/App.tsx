import Gatere from "./assets/gmark.jpg";
import LinkButton from "./components/LinkButton";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
// import Rainmp4 from "./assets/rain.mp4";
// import Rainwebm from "./assets/rain.webm";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import {
    TbNotebook,
    TbWorld,
    TbUser,
    TbBrandGithub,
    TbStack2,
    TbNotes,
} from "react-icons/tb";

interface HeaderLink {
    name: string;
    link: string;
    icon: JSX.Element;
}

interface LinkData {
    name: string;
    link: string;
    icon: JSX.Element;
    className?: string;
}

function App() {
    const [showToast, setShowToast] = useState(false);
    const headerLinks: HeaderLink[] = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/gateremark/",
            icon: <SlSocialLinkedin />,
        },
        {
            name: "Twitter",
            link: "https://twitter.com/gatere_mark",
            icon: <SlSocialTwitter />,
        },
    ];

    const linksData: LinkData[] = [
        {
            name: "GitHub",
            link: "https://github.com/gateremark",
            icon: <TbBrandGithub className=" text-[35px]" />,
        },
        {
            name: "Dev.to",
            link: "https://dev.to/gateremark",
            icon: <TbStack2 className=" text-[35px]" />,
        },
        {
            name: "Hashnode",
            link: "https://hashnode.com/@gateremark",
            icon: <TbNotebook className=" text-[35px]" />,
        },
        {
            name: "Medium",
            link: "https://gateremark.medium.com/",
            icon: <TbNotes className=" text-[35px]" />,
        },
        {
            name: "My Portfolio",
            link: "https://gatere.me/",
            icon: <TbWorld className=" text-[35px]" />,
        },
        {
            name: "My Résumé",
            link: "https://drive.google.com/file/d/1y-DUEL4-1dwBU57hY41VKE1_6F6tc7No/view?usp=drive_link",
            icon: <TbUser className=" text-[35px]" />,
        },
    ];

    if (showToast) {
        toast.success("Link copied to clipboard");
        setShowToast(false);
    }
    return (
        <div className="relative">
            <Toaster richColors position="top-right" closeButton />
            <video
                autoPlay
                muted
                loop
                id="myVideo"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            >
                <source
                    src="https://res.cloudinary.com/dvuazircp/video/upload/v1699399509/rain_opicg6.webm"
                    type="video/webm"
                />
            </video>
            <div className="relative z-10 flex flex-col justify-center items-center mx-3 md:mx-12">
                <img
                    className="mt-12 h-24 rounded-full"
                    src={Gatere}
                    alt="gateremark"
                />
                <p className=" text-[#fff] my-3 text-lg font-bold">
                    @gateremark
                </p>
                <p className=" text-[#fff] text-base text-center">
                    | MERN Stack | Machine Learning | #foreverlearner
                </p>
                <div className="flex text-[#fff] text-3xl gap-5 my-7 justify-center items-center">
                    {headerLinks.map((data, index) => (
                        <a
                            key={index}
                            className="hover:scale-110 transition duration-150 hover:text-[#2867b2] cursor-pointc"
                            href={data.link}
                            target="_blank"
                            rel="noopener"
                        >
                            {" "}
                            {data.icon}{" "}
                        </a>
                    ))}
                </div>
                <div className="text-[#BDBDBD] flex flex-col gap-5 md:w-[55%] w-full items-center justify-center">
                    {linksData.map((data, index) => (
                        <LinkButton
                            {...data}
                            key={index}
                            setShowToast={setShowToast}
                        />
                    ))}
                </div>
                <p className="text-[#fff] my-10 text-center">
                    Made with ❤️ by gateremark
                </p>
            </div>
        </div>
    );
}

export default App;
