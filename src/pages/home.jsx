import { SecBanner } from '../Section/SecBanner';
import { SecTypes } from '../Section/SecTypes';
import { SecAbout } from '../Section/SecAbout';

export const Home = () => {

  return (
    <main>
        <SecBanner />
        <SecAbout />
        <SecTypes />
    </main>
  )
}