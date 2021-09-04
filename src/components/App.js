import styled from 'styled-components';
import { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CartContext from '../contexts/CartContext';
import MoviesContext from '../contexts/MoviesContext';
import Header from './Header';
import Catalog from './Catalog';
import MovieSessions from './MovieSessions';
import SessionSeats from './SessionSeats';
import Footer from './Footer';

export default function App() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSession, setSelectedSession] = useState();

    return (
        <CartContext.Provider value={{ selectedMovie, setSelectedMovie, selectedSession, setSelectedSession, selectedSeats, setSelectedSeats }}>
        <MoviesContext.Provider value={{ movies, setMovies }}>
            <BrowserRouter>
                <Body>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Catalog} exact/>
                    </Switch>
                    <Switch>
                        <Route path="/sessoes/:idFilme" exact>
                            <MovieSessions/>
                            <Footer/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/assentos/:idSessao" exact>
                            <SessionSeats/>
                            <Footer/>
                        </Route>
                    </Switch>
                </Body>
            </BrowserRouter>
        </MoviesContext.Provider>
        </CartContext.Provider>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;