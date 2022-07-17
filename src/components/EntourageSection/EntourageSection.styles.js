import styled from "styled-components";
import { Text } from "../UI/UI.styles";

export const TextContainer = styled(Text)`
  max-width: 600px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const SuccessColor = styled.span`
  background-color: ${({ theme }) => theme.success};
`;

export const PrimaryColor = styled.span`
  background-color: ${({ theme }) => theme.primary};
`;

export const EnlargeText = styled.span`
  font-size: 2.5rem;
`;

export const IconContainer = styled.div`
  padding: 2rem 0;
`;

export const IconBack = styled.span`
  color: ${({ theme }) => theme.accent};
`;

export const IconFront = styled.span`
  color: ${({ theme }) => theme.primary};
`;
