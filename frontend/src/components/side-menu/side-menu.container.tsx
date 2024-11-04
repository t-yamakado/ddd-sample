import React from 'react';
import { SideMenu } from 'src/components/side-menu/side-menu.component';
import { useCreateModalContext } from 'src/components/side-menu/create-modal/create-modal.context';

export const SideMenuContainer: React.FC = () => {
  const { onOpen } = useCreateModalContext();

  const props = {
    onOpen,
  };

  return (
    <>
      <SideMenu {...props} />
    </>
  );
};
