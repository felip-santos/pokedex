import { createBrowserRouter } from "react-router-dom";

import { App } from './App';
import { Home } from './pages/home';
import { Fire } from './pages/fire';
import { Grass } from './pages/grass';
import { Water } from './pages/water';
import { Poison } from './pages/poison';
import { Electric } from './pages/electric';
//import { PagePokemons } from './pages/pokemons';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'fire',
                element: <Fire />
            },
            {
                path: 'grass',
                element: <Grass />
            },
            {
                path: 'water',
                element: <Water />
            },
            {
                path: 'poison',
                element: <Poison />
            },
            {
                path: 'electric',
                element: <Electric />
            }
            // {
            //     path: 'pokemons',
            //     element: <PagePokemons />
            // }
        ]
    }
])
