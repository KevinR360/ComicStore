import React from 'react';
import {withNavigation} from 'react-navigation';

import {Comic, Thumbnail, Title, Price, HeaderComic} from './styles';

function ComicItem({item, navigation}) {
  function handleNavigate(item) {
    navigation.navigate('Details', {item});
  }

  return (
    <Comic onPress={() => handleNavigate(item)}>
      <HeaderComic>
        <Title>{item.title}</Title>
      </HeaderComic>
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
      <Price>$ {item.priceFormat}</Price>
    </Comic>
  );
}

export default withNavigation(ComicItem);
