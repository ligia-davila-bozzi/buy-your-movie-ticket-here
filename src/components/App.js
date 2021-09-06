import styled from 'styled-components';
import { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CartContext from '../contexts/CartContext';
import Header from './Header';
import Catalog from './Catalog';
import MovieSessions from './MovieSessions';
import SessionSeats from './SessionSeats';
import OrderDone from './OrderDone';
import Footer from './Footer';

export default function App() {
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSession, setSelectedSession] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [customerName, setCustomerName] = useState();
    const [customerCPF, setCustomerCPF] = useState();

    return (
        <CartContext.Provider value={{ selectedMovie, setSelectedMovie, selectedSession, setSelectedSession, selectedSeats, setSelectedSeats, selectedTime, setSelectedTime, customerName, setCustomerName, customerCPF, setCustomerCPF }}>
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
                    <Switch>
                        <Route path="/sucesso" exact>
                            <OrderDone/>
                        </Route>
                    </Switch>
                </Body>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;