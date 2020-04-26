import axios from 'axios';

// constantes
const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO';

// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTE_POKEMONES_EXITO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

// ações

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Para exibir os demais 20 pokemons
export const siguientePokemonAccion = () => async (dispatch, getState) => {
  const { next } = getState().pokemones;

  try {
    const res = await axios.get(next);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Para exibir os 20 pokemons anteriores

export const anteriorPokemonAccion = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;

  try {
    const res = await axios.get(previous);
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
