import { TbShare2 } from "react-icons/tb";

interface LinkButtonProps {
	name: string;
	link: string;
	icon: JSX.Element;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, link, icon }) => {
	return (
		<a
			className=" w-full text-center bg-[#00000060] hover:bg-[#00000070] backdrop-blur-[3px] shadow-3xl rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
			href={link}
			target="_blank"
			rel="noopener"
		>
			<div className="flex justify-between items-center ml-2 mr-4">
				{icon}
				<p className="p-5">{name}</p>
				<TbShare2
					className="text-[40px] hover:bg-[#00000070] transition ease-in-out duration-300 rounded-full p-2"
					title="GitHub"
				/>
			</div>
		</a>
	);
};

export default LinkButton;
