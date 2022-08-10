import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  Container,
  ImageContainer,
  Subtitle,
  TextContainer,
  Title,
} from './styles';

const image = {
  uri: 'https://images.unsplash.com/photo-1659861276871-9979a31a55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};

const ListItem = ({ item, index, animation, navigation }) => {
  return (
    <Animatable.View animation={animation} duration={1000} delay={index * 300}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('Detail', {
            item,
          })
        }
      >
        <Container margin={index % 2 ? 30 : 0}>
          <ImageContainer
            source={{ uri: item.urls.small }}
            resizeMode="cover"
            imageStyle={{ borderRadius: 10 }}
          >
            <TextContainer colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0, 0.75)']}>
              <Title>{item.description ?? item.user.name}</Title>
              <Subtitle>{item.likes} votos</Subtitle>
            </TextContainer>
          </ImageContainer>
        </Container>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ListItem;
