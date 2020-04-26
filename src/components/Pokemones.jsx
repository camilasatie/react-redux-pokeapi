import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';

// hooks react redux
import { useDispatch, useSelector } from 'react-redux';

// importamos a ação
import { obtenerPokemonesAccion } from '../redux/pokeDucks';

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.array);

  return (
    <div>
      <Typography variant="h3">Pokemon</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Favorite />}
        onClick={() => dispatch(obtenerPokemonesAccion())}
      >
        Get Pokemons
      </Button>
      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
