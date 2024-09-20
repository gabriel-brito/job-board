import { styled } from "styled-components";

export const CTAButton = styled.button`
  background-color: var(--orange);
  border-radius: 8px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  outline: 0;
  padding: 10px 16px;

  &:disabled {
    cursor: not-allowed;
    background-color: #eee;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    opacity: 0.5;
  }
`;
