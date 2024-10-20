import { useCallback, useState } from 'react';

export type Disclosure = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

// 参考: https://v2.chakra-ui.com/docs/hooks/use-disclosure
export const useDisclosure = (initialState = false): Disclosure => {
  const [isOpen, setIsOpen] = useState(initialState);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return { isOpen, onOpen, onClose, onToggle };
};
