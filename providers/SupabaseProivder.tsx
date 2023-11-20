"use client";


import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
	children: React.ReactNode;
}

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
	const [supabaseClient, setSupabaseClient] = useState(() =>
		createClientComponentClient<Database>()
	);
	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};

export default SupabaseProvider;
