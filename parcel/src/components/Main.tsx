import React from 'react';

export function Main({
  className = 'main',
  children
}: {
  className?: string,
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <main className={className}>
      {children}
    </main>
  );
}
