import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, NavListLink, NavList } from '@components/header/components';
import { navLinks } from '@constants/navLinks';

export const Header = () => {
  return (
    <Container data-testid="header">
      <h1 data-testid="header_title">Calculator</h1>
      <nav>
        <NavList data-testid="header_nav">
          {navLinks.map((data, index) => (
            <NavListLink key={uuidv4()} to={data.path} data-testid={`header_nav_item${index}`}>
              {data.text}
            </NavListLink>
          ))}
        </NavList>
      </nav>
    </Container>
  );
};
