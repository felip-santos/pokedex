import { GlobalStyle, Interface } from './components/GlobalStyle';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <Interface>

        <GlobalStyle />

        <Header />

        <Outlet />

        <Footer>
          <p>© Hofstadter</p>
        </Footer>

      </Interface>
  )
}
