import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, index) => (
        <div>
          <h3 key={index}>Director: {dir.name}</h3>
          <h4>Films: </h4>
          <ul>
            {dir.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
