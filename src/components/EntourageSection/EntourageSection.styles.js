import styled from "styled-components";

export const InfoGraphArea = styled.div`
  padding: 2rem 0;
`;

export const EnlargeText = styled.span`
  font-size: 1.8rem;
`;

export const IconBack = styled.span`
  color: ${({ theme }) => theme.negative};
`;

export const IconFront = styled.span`
  color: ${({ theme }) => theme.neutral};
`;
