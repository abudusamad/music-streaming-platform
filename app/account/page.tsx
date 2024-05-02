import Header from "@/components/Header";
import AccountContent from "./_components/AccountContent";
import { Metadata } from "next";

export const metadata: Metadata = {
      title: "Account Settings",
      description: "Account settings page",
};

const AccountSettingPage = () => {
	return (
        <div className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        ">
			<Header className="from-bg-neutral-900">
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-white text-3xl font-semibold">Account Settings</h1>
				</div>
            </Header>
      
		</div>
	);
};

export default AccountSettingPage;
