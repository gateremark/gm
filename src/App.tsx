// import { useState } from "react";
import Gatere from "./assets/gmark.jpg";
import LinkButton from "./components/LinkButton";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import {
	TbNotebook,
	TbWorld,
	TbUser,
	TbBrandGithub,
	TbStack2,
	TbNotes,
} from "react-icons/tb";

function App() {
	const headerLinks = [
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
	const linksData = [
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
			link: "https://gateremark.vercel.app/",
			icon: <TbWorld className=" text-[35px]" />,
		},
		{
			name: "My Résumé",
			link: "https://drive.google.com/file/d/1VB1yOlRvH-wrNZ1_60AP3z7VHe1rgNvP/view?usp=drive_link",
			icon: <TbUser className=" text-[35px]" />,
		},
	];
	return (
		<div className="flex flex-col justify-center items-center mx-3 my-12 md:mx-12">
			<img className=" h-24 rounded-full" src={Gatere} alt="gateremark" />
			<p className=" text-[#fff] my-3 text-lg font-bold">@gateremark</p>
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
					<LinkButton {...data} key={index} />
				))}
			</div>
			<p className="text-[#fff] mt-10 text-center">
				Made with ❤️ by gateremark
			</p>
		</div>
	);
}

export default App;
