import React, {Component} from 'react';
import { useQuery, gql } from '@apollo/client';
import './shipInfo.css';
import history from '../services/history';
import logos from '../assets/list.json';
import NavBar from '../components/navbar';
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
              episodeID
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
    const pilots = useQuery(pilotsQuery);
    const movies = useQuery(moviesQuery);
    if(pilots.loading || movies.loading) return (<div/>);
    if(pilots.error || movies.error) return (<div/>);
    console.log(movies.data);
    return (
        <div>
        <NavBar/>
        <div class="page">
        <h2 class="display-3">Movies</h2>
        <div className= "wrapper">
        {movies.data.starship.filmConnection.edges.map((film)=>{
          return(
            <div class="card card-container">
            <div class="card-body">
              <h5 class="card-title">{film.node.title}</h5>
            </div>
              <img class="card-img-top img-container" src={require(`../assets/SW${film.node.episodeID}.jpg`)} />
              <span class="card-body top-left">
              <p class="card-text">Directed By: {film.node.director}</p>
              <p class="card-text">Produced By: {film.node.producers.map((producer)=>{
                return(
                  producer + ", "
                )
              })}</p>
              <p class="card-text">Released On: {film.node.releaseDate}</p>
              </span>
            </div>
          )
        })
        }

        </div>
        <h2 class="display-3">Pilots</h2>
        <div className= "wrapper">
        {pilots.data.starship.pilotConnection.pilots.map((pilot)=>{
          console.log(pilot)
          return(
            <div class="card card-container">
              <div class="card-body">
              <h5 class="card-title">{pilot.name}</h5>
              <h6 class="card-title">Stats</h6>
                <p class="card-text">Birth Year: {pilot.birthYear}</p>
                <p class="card-text">Height: {pilot.height/100} m</p>
                <p class="card-text">Weight: {pilot.mass} kg</p>
                <p class="card-text">Gender: {pilot.gender}</p>
                <p class="card-text">Species: {pilot.species ? pilot.species.name : "Human"}</p>
                <p class="card-text">Homeworld: {pilot.homeworld.name}</p>
              </div>
            </div>
          )
        })
        }
        </div>
        </div>
        </div>

    );
}


export default ShipInfo;
