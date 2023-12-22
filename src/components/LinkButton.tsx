import { TbShare2 } from "react-icons/tb";

interface LinkButtonProps {
    name: string;
    link: string;
    icon: JSX.Element;
    setShowToast?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, link, icon, setShowToast }) => {
    return (
        <div className=" relative w-full text-center bg-[#00000060] hover:bg-[#00000070] backdrop-blur-[3px] shadow-3xl rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc">
            
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
                onClick={() => {
                    if (setShowToast) {
                        setShowToast(true);
                    }
                    navigator.clipboard.writeText(link);
                }}
            />
        </div>
    );
};

export default LinkButton;
