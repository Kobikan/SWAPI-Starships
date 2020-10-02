import React, {Component} from 'react';
import { useQuery, gql } from '@apollo/client';
import './Home.css';
import logos from "../assets/list.json";
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
    console.log(logos.CR90corvette)
    return (
      <div className="home">
        <div className="container">
        { data.allStarships.starships.map((starship,i) => {{
          const key = logos[starship.name] ? logos[starship.name] : "unknown";
          const temp = "3.png"
          return(
            <div class="card_layout card col-sm-3">
              <img src={require(`../assets/${temp}`)} alt="Card image cap " class="card-img-top"/>
              <div class="card-body">
                <p class="card-text">{starship.name}</p>
              </div>
            </div>
          )
        }
        })
      }
      </div>
    </div>
  );
}


export default Home;
