import React from 'react';
import TheDragonNewsLogo from '../../assets/images/logos/logo.png';
import { format } from 'date-fns';
import Container from '../Container/Container';

const HeaderTop = () => {
  return (
    <section>
      <Container className="flex flex-col justify-center items-center gap-2.5">
        <img src={TheDragonNewsLogo} alt="The Dragon News Logo" />
        <p className="text-lg font-medium text-accent-content">
          Journalism Without Fear or Favour
        </p>
        <span className="text-[20px] font-semibold">
          {format(new Date(), 'EEEE, MMMM dd, yyyy')}
        </span>
      </Container>
    </section>
  );
};

export default HeaderTop;
