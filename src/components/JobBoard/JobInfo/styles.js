import { styled } from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: var(--paper);
`;

export const Anchor = styled.a`
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 16px;
  text-decoration: none;
  text-transform: none;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 800;
`;

export const Info = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const InfoText = styled.p`
  color: var(--info-color);
  font-size: 0.875rem;
`;
