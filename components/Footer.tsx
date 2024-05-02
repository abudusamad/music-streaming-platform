import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";


interface LinkListProps {
	title?: string;
	links: string[];
	className?: string;
	excludeLast?: boolean;
}

const LinkList = ({ title, links, className, excludeLast }: LinkListProps) => (
	<div className={`default-classes ${className}`}>
		<h1 className="text-sm font-semibold mb-2">{title}</h1>
		<nav className={`flex flex-row gap-2 ${className}`}>
			{links.map((link, index) => (
				<a
					key={index}
					href="#"
					className={`text-sm font-light opacity-70 hover:opacity-100 ${
						excludeLast && index !== links.length - 1 ? "hover:underline" : ""
					}`}
				>
					{link}
				</a>
			))}
		</nav>
	</div>
);

const SocialMediaIcon: React.FC<{ icon: React.ElementType }> = ({
	icon: Icon,
}) => (
	<p className="w-8 h-8 bg-neutral-600 rounded-full p-2 hover:bg-neutral-400 cursor-pointer transition flex items-center justify-center">
		<Icon size={20} />
	</p>
);

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-900 text-white p-8 mt-auto mb-10 ">
			<div className="flex md:flex-row md:gap-16 gap-8 flex-wrap flex-col mb-10">
				<LinkList
					title="Company"
					className="flex flex-col "
					links={["About", "Jobs", "For the Record"]}
				/>
				<LinkList
					title="Communities"
					className="flex flex-col"
					links={[
						"For Artists",
						"Developers",
						"Advertising",
						"Investors",
						"Vendors",
					]}
				/>
				<LinkList
					title="Useful links"
					className="flex flex-col"
					links={["Support", "Web Player", "Free Mobile App"]}
				/>

				<div className="flex ml-auto gap-4">
					<SocialMediaIcon icon={CiFacebook} />
					<SocialMediaIcon icon={FaTwitter} />
					<SocialMediaIcon icon={FaInstagram} />
				</div>
			</div>

			<hr className="mb-8 opacity-10" />

			<div className="flex flex-wrap justify-between gap-4 ">
				<div className="flex space-x-4 ">
					<LinkList
						links={[
							"Legal",
							"Privacy Center",
							"Privacy Policy",
							"Cookies",
							"About Ads",
							"Accessibility",
						]}
					/>
				</div>
				<div>
					<p className="text-sm font-light opacity-70">
						© {currentYear} Spotify AB
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
