import React from 'react';

import ChannelButton from "../ChannelButton"

import { Container, Category, AddCategoryIcon  } from './styles'


const ChannelList: React.FC = () => {
  return (
    <Container>

      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="teste" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="gameplay" />
      <ChannelButton channelName="estudos" />
      <ChannelButton channelName="debates" /> 

    </Container>
  )  
};

export default ChannelList;