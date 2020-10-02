import React from 'react';
import history from '../services/history';
import AutocompleteSearch from './autocomplete';

export default function NavBar(props) {
    const nav = {
        titles: ['Table Of Contents', 'Categories'],
        link: ['toc','categories'],
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Star Wars</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className={props.link == 'home' ? 'nav-item active' : 'nav-item'}>
                            <a className="nav-link" href="" onClick = {() => {
                                history.push('/');
                            }}>Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <AutocompleteSearch/>
                </div>
            </nav>
        </div>
    );
}
