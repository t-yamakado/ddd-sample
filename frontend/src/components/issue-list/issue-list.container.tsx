import React from 'react';
import { IssueList } from 'src/components/issue-list/issue-list.component';
// import { useCreateModalContext } from 'src/components/side-menu/create-modal/create-modal.context';

export const IssueListContainer: React.FC = () => {
  //   const { onOpen } = useCreateModalContext();

  const issues = [
    {
      id: 1,
      title: 'Authentication Failure',
      status: 'Open',
      priority: 'High',
      created: 'Jun 14, 2023',
      updated: 'Jun 16, 2023',
    },
  ];
  const props = {
    issues,
  };

  return (
    <>
      <IssueList {...props} />
    </>
  );
};
