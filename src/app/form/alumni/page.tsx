import React from 'react';

import Question from '@/components/Question/Question';

function Alumni() {
  return (
    <section>
      {Array.from({ length: 10 }).map((_, i) => (
        <Question key={i} />
      ))}
    </section>
  );
}

export default Alumni;
