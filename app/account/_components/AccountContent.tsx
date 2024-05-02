"use client";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {
    const router = useRouter();
    const {user, isLoading}= useUser();

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (!user && !isLoading) {
            router.replace("/");
        }
    }, [user, isLoading, router]);


    return (<div>
        Account Content
    </div> );
}
 
export default AccountContent;