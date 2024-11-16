import React from 'react';

type IssueListProps = {
  issues: {
    id: number;
    title: string;
    status: string;
    priority: string;
    created: string;
    updated: string;
  }[];
};

export const IssueList: React.FC<IssueListProps> = () => {
  return <></>;
};
