import { ContentCard, ImageCard, TextCard, TitleCard } from "./style";

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