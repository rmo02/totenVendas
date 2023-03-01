import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BannerInfo = styled.View`
  width: 70%;
  height: 50%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-around;
  align-items: center;
`;

export const Btn = styled(TouchableOpacity)`
  width: 70%;
  height: 30%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_700};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 15px;
  border-width: 5px;
  border-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextInfo = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD}
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${({ theme }) => theme.COLORS.BLUE_600};
    `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD}
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    `}
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
