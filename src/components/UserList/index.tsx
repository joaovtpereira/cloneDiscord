import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>  

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível 1</Role>

      <UserRow nickname="João Vitor"/>

      <Role>Offline - 4</Role>

      <UserRow nickname="Diego Fernandez" isBot/>
      <UserRow nickname="Hugo Ribeiro" />
      <UserRow nickname="Idye Vinicius" />
      <UserRow nickname="Marllon Breno" />
      
    </Container>
  )  
};

export default UserList;