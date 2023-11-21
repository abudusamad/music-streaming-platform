import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
	return (
		<Toaster
			toastOptions={{
				style: {
					background: "#333",
					color: "#fff",
                },
                duration: 3000,
			}}
		/>
	);
};

export default ToastProvider;
