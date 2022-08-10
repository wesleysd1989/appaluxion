import React from 'react';

import { Container, AnimatableText } from './styles';

function ListEmpty() {
  const anim = {
    0: { translateY: 0 },
    0.5: { translateY: 50 },
    1: { translateY: 0 },
  };
  return (
    <Container>
      <AnimatableText
        animation={anim}
        easing="ease-in-out"
        duration={3000}
        iterationCount="infinite"
      >
        Empty List!
      </AnimatableText>
    </Container>
  );
}

export default ListEmpty;
