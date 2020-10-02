import React, {Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import history from '../services/history';
import { useQuery, gql } from '@apollo/client';

export default function AutocompleteSearch() {
    const [ input, setInput ] = useState('');
    const getInput = (event,val) => {
        console.log(val);
        setInput(val);
    };
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
    if(loading||error) return(<div/>);
    return (
        <Autocomplete
            id="autocomplete"
            value = {input}
            freeSolo
            options={data.allStarships.starships}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderOption={option => <Fragment>{option.name}</Fragment>}
            renderInput={(params) => <TextField {...params} label="Search Starships" variant="outlined" />}
            onChange={getInput}
            onKeyPress= {(e) => {
                if (e.key === 'Enter') {
                    history.push(`/${input.id}`);
                }
            }}
        />
    );
}
