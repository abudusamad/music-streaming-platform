import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
	children: React.ReactNode;
	onChange: (open: boolean) => void;
}

const Modal = ({
	isOpen,
	onClose,
	onChange,
	description,
	title,
	children,
}: ModalProps) => {
	return (
		<Dialog.Root>
			<Dialog.Portal>
				<Dialog.Overlay>
					<Dialog.Content>
						<Dialog.Title>{title}</Dialog.Title>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default Modal;
