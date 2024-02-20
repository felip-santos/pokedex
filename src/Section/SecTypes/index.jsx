import { Wrapper } from '../../components/GlobalStyle';
import { CardType } from '../../components/CardType';
import { ContainerTypes, Section } from './style';

import { types } from '../../data/types';

export const SecTypes = () => {
    return (
        <Section>
            <h2>Tipos de pokemons</h2>
            <Wrapper>
                <ContainerTypes>
                    {types.map(item => <CardType class='cardType' key={item.id} type={item} />)}
                </ContainerTypes>
            </Wrapper>
        </Section>
    );
}