import React from 'react';

export function Header({
  className = '',
}: {
  className?: string
}): React.JSX.Element {
  return (
    <header className={className}>
      <h1>Header</h1>
    </header>
  );
}
