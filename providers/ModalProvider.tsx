"use client";

import Modal from "@/components/Modal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";
interface ModalProviderProps {
    product: ProductWithPrice[];
}


const ModalProvider = ({product}:ModalProviderProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    if (!isMounted) {
        return null;
    }
    return (
        <div>
            <Modal
                isOpen={true}
                onChange={() => {}}
                title="Test Title"
                description="Test Description"
            
            >
            Test Children
            </Modal>

        </div>
    );
}
 
export default ModalProvider;