import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";

import CartContext from "../contexts/CartContext";

export default function Footer() {
    const { 
        selectedMovie, 
        setSelectedMovie, 
        selectedSession, 
        setSelectedSession 
    } = useContext(CartContext);

    return (
        <FooterBox>
            <MoviePic><img alt="" src={selectedMovie.posterURL}></img></MoviePic>
            <MovieInfo>
                <h1>{selectedMovie.title}</h1>
                {selectedSession && <h1>{selectedSession.weekday} - {selectedSession.time}</h1>}
            </MovieInfo>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
`;

const MoviePic = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 0 14px 0 10px;
    img {
        width: 48px;
        height: 72px;
    }
`;

const MovieInfo = styled.div`
    width: calc(100vw - 98px);
    height: 89px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        width: 100%;
        font-family: 'Roboto';
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;