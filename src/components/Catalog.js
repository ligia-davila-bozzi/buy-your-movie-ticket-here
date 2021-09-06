import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CartContext from "../contexts/CartContext";

export default function Catalog() {
    const [movies, setMovies ] = useState();
    const { setSelectedMovie } = useContext(CartContext);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
        request.then((res) => setMovies(res.data))
    }, []);

    return (
        <CatalogBox>
            <Intro>Selecione o filme</Intro>
            <Movies>
                {movies && movies.map((movie, index) => (
                    <Movie key={index}>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img alt="" src={movie.posterURL} onClick={() => {setSelectedMovie(movie)}}></img>
                        </Link>
                    </Movie>
                ))}
            </Movies>
        </CatalogBox>
    )
}

const CatalogBox = styled.div`
    width: 100%;
    height: calc(100vh - 67px);             
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Intro = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
`;

const Movies = styled.div`
    width: 100%;
    height: calc(100vh - 155px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: scroll;
    scrollbar-width: none;
`;

const Movie = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 11px;
    img {
        width: 129px;
        height: 193px;
        cursor: pointer;
    }
`;