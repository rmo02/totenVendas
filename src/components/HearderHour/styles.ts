import styled, {css} from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 80px;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.BLUE_700};

`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD}
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_200};

    `}
`;