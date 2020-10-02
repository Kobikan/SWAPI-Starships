import React, {Component} from 'react';
import { useQuery, gql } from '@apollo/client';
import './Home.css';

function Home() {

    const starships = gql`
    {
      allStarships{
        starships{
          name
        }
      }
    }
    `

    const {loading, error, data} = useQuery(starships);
    if(loading) return (<div/>)
    if(error) return (<div/>)
    console.log(data)
    return (
      <div className="App">
        <div class="card col-sm-3">
          <img src="..." class="card-img-top"/>
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
      </div>
  );
}


export default Home;
