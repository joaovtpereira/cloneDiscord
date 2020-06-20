import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}> 
        <ChannelMessage
          author="Hugo Ribeiro"
          date="20/06/2020"
          content="Hoje faz 15 dias do teu niver maluco!"
        />

        <ChannelMessage
          author="Diego Fernandez"
          date="20/06/2020"
          content={
            <>
              <Mention>@Joao Vitor</Mention>, me ensina a jogar Fifa por favor?
            </>
          }
          hasMention
          isBot
        />

      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )  
};

export default ChannelData;