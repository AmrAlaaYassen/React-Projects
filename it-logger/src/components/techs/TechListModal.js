import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
const TechListModal = () => {
  const [techs, setTechs] = useState([]);

  const getTechs = async () => {
    const res = await fetch('/techs');
    const techs = await res.json();

    setTechs(techs);
  };

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {techs !== null &&
            techs.map(tech => (
              <li className='collection-item' key={tech.id}>
                <TechItem key={tech.id} tech={tech} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
