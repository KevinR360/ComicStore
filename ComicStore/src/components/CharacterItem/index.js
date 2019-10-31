import React from 'react';
import {withNavigation} from 'react-navigation';
import {Character, Thumbnail, Name} from './styles';

function CharacterItem({item, navigation}) {
  function handleToComics(id) {
    navigation.navigate('Comics', {id});
  }

  return (
    <>
      <Character onPress={() => handleToComics(item.id)}>
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
        <Name>{item.name}</Name>
      </Character>
    </>
  );
}

export default withNavigation(CharacterItem);
