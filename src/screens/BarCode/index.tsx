import { BannerInfo, Btn, Container, Icon, Text, TextInfo } from "./styles";
import { DeviceEventEmitter, ImageBackground } from "react-native";
import fundo from "../../../assets/fundo.png";
import { HeaderHour } from "../../components/HearderHour";
import { BottomLogo } from "../../components/BottomLogo";
import { LoadIndicator } from "../../components/Loading/styles";
import { SPrinter, Constants } from '@makgabri/react-native-sunmi-printer';





export function Barcode() {


  async function print(){
    try {
    
      await SPrinter.getPrinterSpecs();

  } catch(e) {
      console.log(e) // Code for error // Message for error
  }
  }


  return (
    <ImageBackground source={fundo} resizeMode="cover" style={{ flex: 1 }}>
      <HeaderHour />
      <Container>
        <BannerInfo>
            <TextInfo>Aproxime o ticket na leitora</TextInfo>
            <LoadIndicator />
            <Btn onPress={print}>
          <Icon name="check-circle" />
          <Text>Cancelar</Text>
        </Btn>
        </BannerInfo>
        
      </Container>
      <BottomLogo />
    </ImageBackground>
  );
}
