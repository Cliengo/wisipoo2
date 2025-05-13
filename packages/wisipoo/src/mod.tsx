import React from 'react';
import clsx from 'clsx';

export interface ThingProps {
  content: string;
  fancy?: boolean;
}

export const Thing: React.FC<ThingProps> = ({ content, fancy }) => {
  return <div className={clsx('thing', { fancy })}>{content}</div>;
}; 