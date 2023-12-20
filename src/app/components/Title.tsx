"use client";

import styled from "styled-components";

const Container = styled.div`
  background-color: tomato;
  max-width: 640px;
  margin: 0 auto;

  h1 {
    padding: 8px;
  }
`;

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <h1>Hello, world!</h1>
      {children}
    </Container>
  );
}
