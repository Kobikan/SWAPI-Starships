import React from 'react';
import history from '../services/history';

const drawerWidth = 240;

export default function Card(props) {
  console.log(props)
    return (
      <div className= "wrapper ">
        {props.list.map((object)=>{
          return(
            <div class="card card-container">
              <img class="card-img-top img-container" src={require(`../assets/SW1.jpg`)} />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })
        }
        </div>
    );
}
