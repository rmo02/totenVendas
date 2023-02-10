
import {  Btn, Container, Icon, Text } from "./styles";
import {ImageBackground} from 'react-native';
import fundo from '../../../assets/fundo.png';
import { HeaderHour } from "../../components/HearderHour";
import { BottomLogo } from "../../components/BottomLogo";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={fundo} resizeMode='cover' style={{flex:1}}>
            <HeaderHour />
        <Container>
            <Btn onPress={() => navigation.navigate("BarCode")}>
            <Icon name="check-circle"/>
                <Text>Toque para pagar seu Ticket</Text>
            </Btn>
        </Container>
        <BottomLogo />
        </ImageBackground>
    )
}