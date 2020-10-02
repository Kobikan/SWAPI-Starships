import React, {Component} from 'react';
import { useQuery, gql } from '@apollo/client';
import history from '../services/history';
import './Home.css';
import NavBar from '../components/navbar';
import logos from '../assets/list.json';
function Home() {
    const starships = gql`
    {
      allStarships{
        starships{
          name
          id
        }
      }
    }
    `; 

    const {loading, error, data} = useQuery(starships);
    if(loading) return (<div/>);
    if(error) return (<div/>);
    console.log(data);
    return (
        <div className="home">
            <NavBar/>
            <div className="layout">
                { data.allStarships.starships.map((starship,i) => {{
                    const key = logos[starship.name] ? logos[starship.name] : 'unknown';
                    const temp = '3.png';
                    return(
                        <div className="card_layout card" onClick = {() => {
                            history.push(`/${starship.id}`);
                        }}>
                            <img src={require(`../assets/${temp}`)} alt="Card image cap " className="card-img-top"/>
                            <div className="card-body">
                                <p className="card-text">{starship.name}</p>
                            </div>
                        </div>
                    );
                }
                })
                }
            </div>
        </div>
    );
}


export default Home;
