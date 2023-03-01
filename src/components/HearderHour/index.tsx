import { Container, Text } from "./styles";
import React, { useState, useEffect } from "react";

export function HeaderHour() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    return hours + ":" + minutes;
  };

  return (
    <Container>
      <Text>{time}</Text>
    </Container>
  );
}
