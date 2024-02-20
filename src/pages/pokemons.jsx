import { useFetchApi } from '../hooks/pokemons';

export const PagePokemons = () => {
    const { dataApi, error, isFetching } = useFetchApi();

    return (
      <main className='iMain'>
        <Wrapper>
          { isFetching && <p>Carregando...</p> }
          { dataApi.map(item => <Card key={item.id} pokemon={item} />)}
        </Wrapper>
      </main>
    )
}