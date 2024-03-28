import React from 'react';

import { MutatingDots } from 'react-loader-spinner';

function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
      }}
    >
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="gray"
        secondaryColor="gray"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  );
}

export default Loading;
