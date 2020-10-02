import React, {Component} from 'react';
import { useQuery, gql } from '@apollo/client';
import './shipInfo.css';
import history from '../services/history';
import logos from '../assets/list.json';
function ShipInfo(props) {
    const moviesQuery = gql`{
      starship(id:"${props.match.params.id}") {
        filmConnection{
          edges{
            node{
              title
              director
              producers
              releaseDate
            }
          }
        }
      }
    }
    `;
    const pilotsQuery = gql`
    {
      starship(id:"${props.match.params.id}") {
        pilotConnection {
          pilots{
            name
            birthYear
            eyeColor
            gender
            hairColor
            height
            mass
            homeworld{
              name
            }
            species{
              name
            }
            created
            edited
          }
        }
      }
    }
    `;
    const {loadingPilots, errorPilots, pilots} = useQuery(pilotsQuery);
    const {loadingMovies, errorMovies, movies} = useQuery(moviesQuery);
    if(loadingPilots || loadingMovies) return (<div/>);
    if(errorPilots|| errorMovies) return (<div/>);
    console.log(pilots);
    return (
        <div className="home">
        </div>
    );
}


export default ShipInfo;
