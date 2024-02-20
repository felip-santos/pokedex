import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from '../GlobalStyle';
import { ContainerHeader, ContentImage, UlContent, ContentMenu } from './style';

import iconMenu from '../../assets/iconMenu.svg';

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [headerBackground, setHeaderBackground] = useState('transparent');

    const toggleActiveMenu = () => {
        setActiveMenu(!activeMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 10) {
                setHeaderBackground('#121214');
            } else {
                setHeaderBackground('transparent');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <ContainerHeader style={{ background: headerBackground }}>
          <Wrapper className='wrapper'>
            <ContentImage>
                <h2>Pokedex</h2>
                <img src='/logo.svg' alt='Logo' />
            </ContentImage>
            <nav className={activeMenu ? 'activeMenu' : ''}>
              <UlContent>
                <li><Link to='/'>Home</Link></li>
                <li><Link to=''>Tipos</Link></li>
                <li><Link to=''>Sobre</Link></li>
              </UlContent>
            </nav>

            <ContentMenu onClick={toggleActiveMenu}>
                <img src={iconMenu} alt='Ícone de menu' />
            </ContentMenu>
          </Wrapper>
        </ContainerHeader>
    );
}

