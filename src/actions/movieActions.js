import sanityAPI from "../client.js";
import {
  MOVIES_FETCH_FAIL,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS  
} from "../constants/movieConstants.js";

const fetchAllMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIES_FETCH_REQUEST
    });
    const data = await sanityAPI.fetch(
      `*[_type == 'movie']{                                            
          _id,
          "poster": poster.asset->url,
      } `
    );
    dispatch({
      type: MOVIES_FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MOVIES_FETCH_FAIL,
      payload: error.message
    });
  }
};

const fetchMoviesByRef = (ref) => async (dispatch) => {
    try {
      dispatch({
        type: MOVIES_REF_FETCH_REQUEST
      });
      const data = await sanityAPI.fetch(
        `*[_type == 'movie' 
              && (castMembers[person._ref match '${ref}'] || 
                  crewMembers[person._ref match '${ref}'])            
              ]{                                             
                  _id,                              
                  "poster" : poster.asset->url,
                  title
              } `
      );
      dispatch({
        type: MOVIES_REF_FETCH_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: MOVIES_REF_FETCH_FAIL,
        payload: error.message
      });
    }
  };