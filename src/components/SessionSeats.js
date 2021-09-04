import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CartContext from '../contexts/CartContext';

export default function MovieSessions() {
    const { selectedMovie, setSelectedSession } = useContext(CartContext);
    const [seats, setSeats] = useState([]);
    const { idSessao } = useParams();

    useEffect(() => {
        if(idSessao) {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`);
            request.then((res) => {setSeats(res.data.seats); console.log(res.data.seats)});
        }
    }, [idSessao]);

    return (
        <SessionSeatsBox>
            <Intro>Selecione o horário</Intro>
        </SessionSeatsBox>
    )
}

const SessionSeatsBox = styled.div`
    width: 100%;
    height: calc(100vh - 184px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Intro = styled.h1`
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
`;