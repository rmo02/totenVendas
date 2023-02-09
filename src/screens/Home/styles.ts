import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
flex:1;
justify-content: center;
align-items: center;
`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD}
        font-size: ${theme.FONT_SIZE.MD}px

    `}
`;