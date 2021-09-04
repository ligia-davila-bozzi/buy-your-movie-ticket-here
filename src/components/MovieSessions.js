import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CartContext from '../contexts/CartContext';

export default function MovieSessions() {
    const { selectedMovie, setSelectedSession } = useContext(CartContext);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${selectedMovie.id}/showtimes`);
        request.then((res) => {setSessions(res.data.days)});
    }, []);

    return (
        <MovieSessionsBox>
            <Intro>Selecione o horário</Intro>
            <Sessions>
                {sessions.map((session, index) => (
                    <SessionBox key={index}>
                        <Date>{session.weekday} - {session.date}</Date>
                        <Showtimes>
                            {session.showtimes.map((showtime, index) => (
                                <Link key={index} style={{ textDecoration: 'none', marginRight: '10px'}} to={`/assentos/${showtime.id}`}>
                                    <Showtime onClick={() => {setSelectedSession(session)}}>{showtime.name}</Showtime>
                                </Link>
                            ))}
                        </Showtimes>
                    </SessionBox>
                ))}
            </Sessions>
        </MovieSessionsBox>
    )
}

const MovieSessionsBox = styled.div`
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

const Sessions = styled.div`
    width: 100%;
    height: calc(100vh - 272px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    scrollbar-width: none;
`;

const SessionBox = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 48px);
    height: 88px;
    margin-bottom: 23px;
`;

const Date = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 20px;
    line-height: 23px;
    color: #293845;
    margin-bottom: 22px;
`;

const Showtimes = styled.div`
    width: 100%;
    display: flex;
    overflow: scroll;
    scrollbar-width: none;
`;

const Showtime = styled.div`
    width: 85px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
`;