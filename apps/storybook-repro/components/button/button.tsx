import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  --background: transparent;
  border: none;
  padding: 1em 2em;
  background: tomato;
  border-radius: 5px;
  color: white;
  background-image: linear-gradient(var(--background) 0, var(--background));
  outline: none;

  &:hover {
    --background: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    --background: rgba(0, 0, 0, 0.05);
    outline: 2px solid blue;
  }

  &:active {
    --background: rgba(0, 0, 0, 0.2);
  }
`;

export function Button(props: ButtonProps) {
  return <StyledButton>Button</StyledButton>;
}

export default Button;
