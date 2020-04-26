import React from 'react';
import { Typography } from '@material-ui/core';
import { Container, Button, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

// hooks react redux
import { useDispatch, useSelector } from 'react-redux';

// importamos a ação
import {
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  anteriorPokemonAccion,
} from '../redux/pokeDucks';

// Estilo personalizado do botão
const useStyle = makeStyles({
  miButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const Pokemones = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  return (
    <Container>
      <Typography variant="h3">Pokemon</Typography>

      {pokemones.length === 0 && (
        <Button
          className={classes.miButton}
          variant="contained"
          endIcon={<Favorite />}
          onClick={() => dispatch(obtenerPokemonesAccion())}
        >
          Get Pokemons
        </Button>
      )}

      {previous && (
        <Button
          className={classes.miButton}
          onClick={() => dispatch(anteriorPokemonAccion())}
        >
          Anterior
        </Button>
      )}

      {next && (
        <Button
          className={classes.miButton}
          onClick={() => dispatch(siguientePokemonAccion())}
        >
          Siguiente
        </Button>
      )}

      <Typography component="span">
        <List>
          {pokemones.map((item) => (
            <ListItem key={item.name}>{item.name}</ListItem>
          ))}
        </List>
      </Typography>
    </Container>
  );
};

export default Pokemones;
