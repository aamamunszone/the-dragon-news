import React from 'react';
import Container from '../Container/Container';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <section>
      <Container className="bg-base-200 p-3 flex items-center gap-5">
        <span className="bg-secondary text-secondary-content px-4 py-1.5 text-[20px] font-medium">
          Latest
        </span>
        <Marquee pauseOnHover={true}>
          <p className="text-lg font-semibold mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            a!
          </p>
          <p className="text-lg font-semibold mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            a!
          </p>
          <p className="text-lg font-semibold mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            a!
          </p>
        </Marquee>
      </Container>
    </section>
  );
};

export default LatestNews;
