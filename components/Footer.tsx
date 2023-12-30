import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";

interface FooterProps {}

interface LinkListProps {
	title?: string;
	links: string[];
	className?: string;
}

const LinkList = ({ title, links, className }: LinkListProps) => (
	<div className={`default-classes ${className}`}>
		<h1 className="text-sm font-semibold mb-2">{title}</h1>
		<nav className="flex flex-col gap-2">
			{links.map((link, index) => (
				<a
					key={index}
					href="#"
					className="text-sm font-light opacity-70 hover:opacity-100"
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

const Footer: React.FC<FooterProps> = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-900 text-white p-6 mt-auto mb-16">
			<div className="flex md:flex-row md:gap-16 gap-8 flex-wrap flex-col mb-10">
				<LinkList title="Company" className="flex flex-col" links={["About", "Jobs", "For the Record"]} />
				<LinkList
					title="Communities"
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
					links={["Support", "Web Player", "Free Mobile App"]}
				/>

				<div className="flex ml-auto gap-4">
					<SocialMediaIcon icon={CiFacebook} />
					<SocialMediaIcon icon={FaTwitter} />
					<SocialMediaIcon icon={FaInstagram} />
				</div>
			</div>

			<hr className="mb-8 opacity-30" />

			<div className="flex flex-wrap justify-between ">
				<div className="flex flex-row">
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
