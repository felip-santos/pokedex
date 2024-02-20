import { Wrapper } from '../../components/GlobalStyle';
import { ContentText, Image, Section } from './style';

export const SecBanner = () => {
    return (
        <Section>

            <Wrapper className='wrapper'>
                <ContentText>
                    <h1>
                        Jornada Pokémon:
                        Captura e Aventura
                    </h1>
                    <p>
                        Aventuras Virtuais, Estratégias de Treinamento e Notícias 
                        Exclusivas para Treinadores Pokémon!
                    </p>
                </ContentText>
                <Image src='/Pikachu.svg' alt='Pokémon Pikachu' />
            </Wrapper>

        </Section>
    );
}