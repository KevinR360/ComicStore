import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import md5 from 'md5';
import {Alert} from 'react-native';

import api from '~/services/api';

import {
  Container,
  ComicsList,
  PageCounter,
  PageNumber,
  HandlePage,
} from './styles';
import Background from '~/components/Background';
import ComicItem from '~/components/ComicItem';
import Loading from '~/components/Loading';

export default function Comics({navigation}) {
  const id = navigation.getParam('id');
  const [totalComics, setTotalComics] = useState(null);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const PUBLIC_KEY = 'ea6d801d929403d9a49787333894e369';
  const PRIVATE_KEY = 'b0a69774683351fbb59410fda7c6f9e49a14b207';
  const timestamp = Number(new Date());
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  useEffect(() => {
    setLoading(true);

    async function loadComics() {
      try {
        const response = await api.get(`characters/${id}/comics`, {
          params: {
            ts: timestamp,
            apikey: PUBLIC_KEY,
            hash,
            offset: 20 * page,
          },
        });

        const total = response.data.data.total;

        setTotalComics(total);

        const data = response.data.data.results.map(data => ({
          ...data,
          priceFormat: data.prices[0].price,
        }));

        setComics(data);
        console.tron.log(response);
      } catch (err) {
        Alert.alert(
          'Ops, não foi possivel conectar com o servidor!',
          'Verifique sua conexão.'
        );
      }
      setLoading(false);
    }

    loadComics();
  }, [page]);

  function Increment() {
    if (totalComics / 20 > page + 1) {
      const newPage = page + 1;
      setPage(newPage);
    }
  }

  function Decrement() {
    if (page > 0) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }

  return (
    <Background>
      {loading ? <Loading /> : null}
      <Container>
        <ComicsList
          horizontal
          data={comics}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ComicItem item={item} />}
        />
        <PageCounter>
          <HandlePage disabled={page <= 0 ? true : false} onPress={Decrement}>
            <Icon
              name="chevron-left"
              size={36}
              color={'rgba(255, 255, 255, 0.6)'}
            />
          </HandlePage>
          <PageNumber>{page + 1}</PageNumber>
          <HandlePage
            disabled={totalComics / 20 <= page ? true : false}
            onPress={Increment}>
            <Icon
              name="chevron-right"
              size={36}
              color={'rgba(255, 255, 255, 0.6)'}
            />
          </HandlePage>
        </PageCounter>
      </Container>
    </Background>
  );
}

Comics.navigationOptions = {
  title: 'Comics',
  headerStyle: {
    backgroundColor: '#2B1a2f',
  },
};
