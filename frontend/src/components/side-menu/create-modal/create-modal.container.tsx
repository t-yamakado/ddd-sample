import { useCreateModalContext } from 'src/components/side-menu/create-modal/create-modal.context';
import { CreateModal } from 'src/components/side-menu/create-modal/create-modal.component';

type Props = {};

export const CreateModalContainer: React.FC<Props> = () => {
  const { isOpen, onClose } = useCreateModalContext();

  const props = {
    isOpen,
    onClose,
  };
  return <CreateModal {...props} />;
};
