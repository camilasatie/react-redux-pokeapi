import React, { useEffect } from 'react';
import Detalle from '../components/Detalle';
import { Typography } from '@material-ui/core';
import {
  Box,
  Container,
  Button,
  List,
  ListItem,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, NavigateNext, NavigateBefore } from '@material-ui/icons/';

// hooks react redux
import { useDispatch, useSelector } from 'react-redux';

// importamos a ação
import {
  obtenerPokemonesAccion,
  siguientePokemonAccion,
  anteriorPokemonAccion,
  unPokeDetalleAccion,
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
  container: {
    height: '100vh',
  },
  list: {
    backgroundColor: '#fff',
  },
});

const Pokemones = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAccion());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <Typography variant="h3">Pokemon</Typography>

      <Box display="flex" width="100%">
        <Box p={1} flexGrow={1}>
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

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {previous && (
              <Button
                className={classes.miButton}
                onClick={() => dispatch(anteriorPokemonAccion())}
              >
                <NavigateBefore />
              </Button>
            )}

            {next && (
              <Button
                className={classes.miButton}
                onClick={() => dispatch(siguientePokemonAccion())}
              >
                <NavigateNext />
              </Button>
            )}
          </Grid>

          <Typography component="span">
            <List>
              {pokemones.map((item) => (
                <ListItem
                  key={item.name}
                  display="flex"
                  className={classes.list}
                >
                  <Box flexGrow={1}>{item.name}</Box>
                  <Box>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                    >
                      Info
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>

        <Box p={1} flexGrow={1}>
          <Box pb={2}>
            <Typography variant="h4">Detalle del Pokemon</Typography>
          </Box>

          <Detalle />
        </Box>
      </Box>
    </Container>
  );
};

export default Pokemones;
