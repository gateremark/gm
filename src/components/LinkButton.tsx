import { TbShare2 } from "react-icons/tb";
import { Toaster, toast } from "sonner";

interface LinkButtonProps {
    name: string;
    link: string;
    icon: JSX.Element;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, link, icon }) => {
    return (
        <div className=" relative w-full text-center bg-[#00000060] hover:bg-[#00000070] backdrop-blur-[3px] shadow-3xl rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc">
            <Toaster richColors position="top-right" />
            <a href={link} target="_blank" rel="noopener">
                <div className="flex justify-between items-center ml-2 mr-4">
                    {icon}
                    <p className="p-5">{name}</p>
                    <div></div>
                </div>
            </a>
            <TbShare2
                className="text-[40px] hover:bg-[#00000070] transition ease-in-out duration-300 rounded-full p-2 absolute z-10 right-2 top-3 cursor-pointer"
                title="Share Link"
                onClick={(e: any) => {
                    e.preventDefault();
                    toast.success("Link Copied Successfully!");
                    navigator.clipboard.writeText(link);
                }}
            />
        </div>
    );
};

export default LinkButton;
