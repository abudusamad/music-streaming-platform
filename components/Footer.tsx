const Footer = () => {
	return (
		<footer className="bg-neutral-900 text-white p-6 mt-auto">
			<div className="flex justify-between">
				<div>
					<p>© 2022 Spotify AB</p>
				</div>
				<div className="space-x-4">
					<a href="/about" className="text-white">
						About
					</a>
					<a href="/help" className="text-white">
						Help
					</a>
					<a href="/privacy" className="text-white">
						Privacy
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
