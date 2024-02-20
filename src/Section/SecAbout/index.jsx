import { Wrapper } from '../../components/GlobalStyle';

import { ContentText, Image, Section } from './style';

export const SecAbout = () => {
    return (
        <Section>
            <Wrapper className='wrapper'>
                <Image src='/pokemon.png' alt='Pokemon' />
                <ContentText>
                    <h3>Sobre</h3>
                    <h2>Projeto Pokedex</h2>
                    <p>
                        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. 
                        Earum mollitia cum ex ipsam autem!earum sequi amet. Quisque ac molestie mauris. Phasellus at neque consectetur, gravida erat at, ullamcorper lectus. 
                        Vestibulum eget sagittis nisi.
                    </p>
                    <button>Leia Mais</button>
                </ContentText>
            </Wrapper>
        </Section>
    );
}