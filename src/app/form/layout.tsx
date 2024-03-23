import React, { PropsWithChildren } from 'react';

function FormLayout({ children }: PropsWithChildren) {
  return (
    <main
      style={{
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        paddingInline: '1rem',
      }}
    >
      {children}
    </main>
  );
}

export default FormLayout;
