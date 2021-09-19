import React from 'react';

import './styles.scss';

function Header() {
  return (
    <>
      <header>
        <div className="capa">
          <img src="/assets/capa.jpg" alt="Capa" />
        </div>

        <div className="photo">
          <img src="/assets/joao.jpg" alt="João Paulo" />
        </div>
      </header>

      <h1>João Paulo Moura</h1>
      <p>Front-end Developer</p>
    </>
  );
}

export default Header;