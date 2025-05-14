import React from 'react';
import clsx from 'clsx';

export interface EditorProps {
  content: string;
  fancy?: boolean;
}

export const Editor: React.FC<EditorProps> = ({ content, fancy }) => {
  return <div className={clsx('wisipoo-editor', { fancy })}>{content}</div>;
}; 