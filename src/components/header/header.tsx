import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, NavListLink, NavList } from '@components/header/components';
import { navLinks } from '@constants/navLinks';

export const Header = () => {
  return (
    <Container>
      <h1>Calculator</h1>
      <nav>
        <NavList>
          {navLinks.map((data) => (
            <NavListLink key={uuidv4()} to={data.path}>
              {data.text}
            </NavListLink>
          ))}
        </NavList>
      </nav>
    </Container>
  );
};
