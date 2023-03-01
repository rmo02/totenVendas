import styled, {css} from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 80px;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.BLUE_700};

`;

export const Logo = styled.Image`
    width: 100px;
    height: 50px;
`;