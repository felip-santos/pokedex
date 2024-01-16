import { Card } from './components/Card';
import { Wrapper } from './components/Wrapper';
import { GlobalStyle, Interface } from './components/GlobalStyle';
import { ContainerHeader, TitleHeader } from './components/Header';

import { useFetchApi } from './hooks/pokemons';

export const App = () => {

  const { dataApi, error, isFetching } = useFetchApi();

  return (
      <Interface>

        <GlobalStyle />

        <ContainerHeader>
          <TitleHeader>Pokedex</TitleHeader>
        </ContainerHeader>

        <main className='iMain'>
          <Wrapper>
            { isFetching && <p>Carregando...</p> }
            { dataApi.map(item => <Card key={item.id} pokemon={item} />)}
          </Wrapper>
        </main>

      </Interface>
  )
}
