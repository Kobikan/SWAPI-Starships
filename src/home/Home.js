import React from 'react';
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
				<div className="card-columns">

					{ data.allStarships.starships.map((starship) => {{
						const key = logos[starship.name] ? logos[starship.name] : 'unknown';
						return(
							<div className="card-layout card" onClick = {() => {
								history.push(`/${starship.id}`);
							}}>
								<img src={require(`../assets/${key}`)} className="card-img-top"/>
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
		</div>
	);
}


export default Home;
