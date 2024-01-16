import styled from 'styled-components';

const ContentCard = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    background-color: #F9F9F9;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .4);
`

const ImageCard = styled.img`
    width: 40%;
    object-position: center top;
`

const TitleCard = styled.h2`
    color: #222;
    font-size: 1.3rem;
    margin: 2rem 0 1rem;
    text-transform: capitalize;
`

const TextCard = styled.p`
    color: #333;
    font-size: 1rem;
    text-transform: capitalize;
`

export const Card = ({ pokemon }) => {

    const checkImagem = () => {
        if (!pokemon.sprites.other.dream_world.front_default) {
            return pokemon.sprites.other.home.front_default;
        }

        return pokemon.sprites.other.dream_world.front_default;
    }

    const checkTypes = () => {
        if (pokemon.types[1]) {
            return `${pokemon.types[0].type.name} - ${pokemon.types[1].type.name}`;
        }

        return pokemon.types[0].type.name;
    }

    return (
        <ContentCard>

            <ImageCard src={checkImagem()} alt={pokemon.name} />

            <TitleCard>{pokemon.name}</TitleCard>
            <TextCard>{checkTypes()}</TextCard>

        </ContentCard>
    )
}