import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import {Alert} from 'react-native';

import {Container, ListItens} from './styles';
import Background from '~/components/Background';
import CharacterItem from '~/components/CharacterItem';
import Loading from '~/components/Loading';

import api from '~/services/api';

export default function Characters() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const PUBLIC_KEY = 'ea6d801d929403d9a49787333894e369';
  const PRIVATE_KEY = 'b0a69774683351fbb59410fda7c6f9e49a14b207';
  const timestamp = Number(new Date());
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);

      try {
        const response = await api.get('characters', {
          params: {
            ts: timestamp,
            apikey: PUBLIC_KEY,
            hash,
            offset: 50 * page,
            limit: 50,
          },
        });

        if (characters.length > 0) {
          const data = [...characters, ...response.data.data.results];
          setCharacters(data);
        } else {
          setCharacters(response.data.data.results);
        }
      } catch (err) {
        Alert.alert(
          'Ops, não foi possivel conectar com o servidor!',
          'Verifique sua conexão.'
        );
      }

      setLoading(false);
    }
    loadCharacters();
  }, [page]);

  function loadMore() {
    const newPage = page + 1;
    setPage(newPage);
  }

  return (
    <Background>
      <Container>
        {loading ? <Loading /> : null}
        <ListItens
          data={characters}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <CharacterItem item={item} />}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
        />
      </Container>
    </Background>
  );
}

Characters.navigationOptions = {
  title: 'Heroes',
  headerStyle: {
    backgroundColor: '#2B1a2f',
  },
};
