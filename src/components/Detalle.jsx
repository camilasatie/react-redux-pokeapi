import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unPokeDetalleAccion } from '../redux/pokeDucks';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyle = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
});

const Detalle = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(unPokeDetalleAccion());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.unPokemon);
  const classes = useStyle();

  return pokemon ? (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{ height: '100%', paddingTop: '100%' }}
          image={pokemon.foto}
        ></CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className={classes.uppercase}
        >
          {pokemon.nombre}
        </Typography>
        <Typography component="span">
          Alto: {pokemon.alto} - Ancho: {pokemon.ancho}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
};

export default Detalle;
