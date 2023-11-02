import { TbShare2 } from "react-icons/tb";

const LinkButton = ({ name, link, icon }) => {
	return (
		<a
			className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
			href={link}
			target="_blank"
			rel="noopener"
		>
			<div className="flex justify-between items-center ml-2 mr-4">
				{icon}
				<p className="p-5">{name}</p>
				<TbShare2
					className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
					title="GitHub"
				/>
			</div>
		</a>
	);
};

export default LinkButton;
