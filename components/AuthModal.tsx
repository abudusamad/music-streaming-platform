import useAuthModal from "@/hooks/useAuthModal";
import {
	useSessionContext,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Modal from "./Modal";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
	const { session } = useSessionContext();
	const router = useRouter();
	const { onClose, isOpen } = useAuthModal();

	const supabaseClient = useSupabaseClient();

	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);

	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Modal
			title="Welcome Back"
			description="Login to your account"
			isOpen={isOpen}
			onChange={onChange}
		>
			<Auth
                supabaseClient={supabaseClient}
                providers={["github", "google"]}
                magicLink={true}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: "#404040",
								brandAccent: "#22c55e",
							},
						},
					},
				}}
				theme="dark"
			/>
		</Modal>
	);
};

export default AuthModal;
