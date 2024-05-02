export const GreetingTitle = () => {
	const date = new Date();
    const hour = date.getHours(); // getHours() returns the hour (0-23)
    const message = "Welcome back";

	let greeting;
	if (hour < 12) {
		greeting = `Good Morning! ${message}`;
	} else if (hour < 18) {
		greeting = `Good Afternoon! ${message}`;
	} else {
		greeting = `Good Evening! ${message}`;
	}

	return <h1>{greeting}</h1>;
};
