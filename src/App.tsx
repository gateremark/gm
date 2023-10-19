// import { useState } from "react";
import Gatere from "./assets/gmark.jpg";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import {
	TbNotebook,
	TbWorld,
	TbUser,
	TbBrandGithub,
	TbStack2,
	TbShare2,
	TbNotes,
} from "react-icons/tb";

function App() {
	//   const [copySuccess, setCopySuccess] = useState(false);

	// 	const handleCopyClick = (link: string) => {
	// 		navigator.clipboard
	// 			.writeText(link)
	// 			.then(() => {
	// 				setCopySuccess(true);
	// 				setTimeout(() => {
	// 					setCopySuccess(false);
	// 				}, 2000);
	// 			})
	// 			.catch((error) => {
	// 				console.error("Copy failed:", error);
	// 			});
	// 	};
	return (
		<div className="flex flex-col justify-center items-center mx-3 my-12 md:mx-12">
			<img className=" h-24 rounded-full" src={Gatere} alt="gateremark" />
			<p className=" text-[#fff] my-3 text-lg font-bold">@gateremark</p>
			<p className=" text-[#fff] text-base text-center">
				| MERN Stack | Machine Learning | #foreverlearner
			</p>
			<div className="flex text-[#fff] text-3xl gap-5 my-7 justify-center items-center">
				<a
					className="hover:scale-110 transition duration-150 hover:text-[#2867b2] cursor-pointc"
					href="https://www.linkedin.com/in/gateremark/"
					target="_blank"
					rel="noopener"
				>
					{" "}
					<SlSocialLinkedin />{" "}
				</a>
				<a
					className="hover:scale-110 transition duration-150 hover:text-[#39a9d9] cursor-pointc"
					href="https://twitter.com/gatere_mark"
					target="_blank"
					rel="noopener"
				>
					{" "}
					<SlSocialTwitter />{" "}
				</a>
			</div>
			<div className="text-[#BDBDBD] flex flex-col gap-5 md:w-[55%] w-full items-center justify-center">
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://github.com/gateremark"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbBrandGithub className=" text-[35px]" />
						<p className="p-5">GitHub</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="GitHub"
							// id="githubLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://dev.to/gateremark"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbStack2 className=" text-[35px]" />
						<p className="p-5">Dev.to</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Dev.to"
							// id="devLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://hashnode.com/@gateremark"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbNotebook className=" text-[35px]" />
						<p className="p-5">Hashnode</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Hashnode"
							// id="hashnodeLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://gateremark.medium.com/"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbNotes className=" text-[35px]" />
						<p className="p-5">Medium</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Medium"
							// id="mediumLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://gateremark.vercel.app/"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbWorld className=" text-[35px]" />
						<p className="p-5">My Portfolio</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="My Portfolio"
							// id="portfolioLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] hover:bg-[#444444] rounded-[30px] hover:scale-[102%] transition duration-300 cursor-pointc"
					href="https://drive.google.com/file/d/1nzCDDQOAxzL8FIi5dI0nWgJT8rvEiqk2/view?usp=share_link"
					target="_blank"
					rel="noopener"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbUser className=" text-[35px]" />
						<p className="p-5">My Résumé</p>
						<TbShare2
							className="text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="My Résumé"
							// id="resumeLink"
							// onClick={() => handleCopyClick("")}
						/>
					</div>
				</a>
			</div>
			<p className="text-[#fff] mt-10 text-center">
				Made with ❤️ by gateremark
			</p>
		</div>
	);
}

export default App;
