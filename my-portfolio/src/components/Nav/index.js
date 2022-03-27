import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {

  return (
      <nav>
        <ul className="flex-row">
          <li>
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li>
          <span onClick=''>Portfolio</span>
          </li>
          <li>
              <span onClick=''>Contact</span>
          </li>
          <li>
              <span onClick=''>Resume</span>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;