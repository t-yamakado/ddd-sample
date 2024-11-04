import { useDisclosure } from 'src/hooks/use-disclosure';
import React from 'react';

type CreateModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const CreateModalContext = React.createContext<CreateModalContextType>({} as never);

export const CreateModalContextProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <CreateModalContext.Provider value={{ isOpen, onOpen, onClose }}>{children}</CreateModalContext.Provider>;
};

export const useCreateModalContext = () => React.useContext(CreateModalContext);
