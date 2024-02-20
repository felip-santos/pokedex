import { Card } from '../components/Card';
import { Main } from '../styles/pagesStyle';
import { Wrapper } from '../components/GlobalStyle';

import { useFetchApi } from '../hooks/pokemons';

export const Fire = () => {
    const { dataApi, error, isFetching } = useFetchApi();

    return (
        <Main>
            <h2>Pokemons do tipo Fire</h2>
            <Wrapper className='wrapper'>
                { isFetching && <p>Carregando...</p> }
                { dataApi.map(item => <Card key={item.id} pokemon={item} />)}
            </Wrapper>
        </Main>
    )
}