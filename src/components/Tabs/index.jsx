import React, {useState} from 'react';

import './styles.scss';

function Tabs() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <ul className="tabs">
        <li className={`tab1 ${tab == 1 ? 'active' : ''}`}>
          <button onClick={() => setTab(1)}>Github</button>
        </li>
        <li className={`tab2 ${tab == 2 ? 'active' : ''}`}>
          <button onClick={() => {setTab(2)}}>Clientes Corebiz</button>
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab1 tab ${tab == 1 ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="">
                <img src="/assets/desafio1.jpg" alt="Desafio 1" />
              </a>
            </li>

            <li>
              <a href="">
                <img src="/assets/desafio2.png" alt="Desafio 2" />
              </a>
            </li>

            <li>
              <a href="">
                <img src="/assets/desafio3.jpg" alt="Desafio 3" />
              </a>
            </li>
          </ul>
        </div>

        <div className={`tab2 tab ${tab == 2 ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="">
                <img src="/assets/chilibeans.jpg" alt="Chilibeans" />
              </a>
            </li>

            <li>
              <a href="">
                <img src="/assets/corebiz.jpg" alt="Corebiz" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tabs;