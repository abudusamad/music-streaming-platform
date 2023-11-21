import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
            uploadModal.onClose();
        }
    }
    return ( 
        <Modal
            title="Upload a file"
            description="Upload a file to your account"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        
        >

        </Modal>
     );
}
 
export default UploadModal;