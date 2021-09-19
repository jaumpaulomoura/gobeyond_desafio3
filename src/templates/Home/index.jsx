import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import './styles.scss';

function Home() {
  
  return (
    <>
      <Header />

      <ul className="contatos">
        <li>
          <a href="https://wa.me/16994629339">
            <img src="/assets/whatsapp.png" alt="Whatsapp" />
            <span>Whatsapp</span>
          </a>
        </li>
        <li>
          <a href="tel:16994629339">
            <img src="/assets/phone.png" alt="Phone" />
            <span>Phone</span>
          </a>
        </li>
        <li>
          <a href="mailto:joaopaulo92803693@gmail.com">
            <img src="/assets/mail.png" alt="Mail" />
            <span>E-mail</span>
          </a>
        </li>
      </ul>

      <Tabs />
    </>
  );
}

export default Home;