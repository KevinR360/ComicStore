import React from 'react';

import Background from '~/components/Background';
import {Container, Thumbnail, Title, Description, Price} from './styles';

export default function Details({navigation}) {
  const item = navigation.getParam('item');
  console.tron.log(item);

  return (
    <Background>
      <Container>
        <Thumbnail
          source={
            item.thumbnail
              ? {
                  uri: item.thumbnail.path + '.' + item.thumbnail.extension,
                }
              : {
                  uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
                }
          }
        />
        <Title>{item.title || item.name}</Title>
        <Description>{item.description}</Description>
        <Price>Price: ${item.priceFormat}</Price>
      </Container>
    </Background>
  );
}

Details.navigationOptions = {
  title: 'Details',
  headerStyle: {
    backgroundColor: '#2B1a2f',
  },
};
