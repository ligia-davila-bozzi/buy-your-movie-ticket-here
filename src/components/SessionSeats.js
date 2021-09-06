import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import CartContext from '../contexts/CartContext';
import SeatsExample from './SeatsExample';

export default function MovieSessions() {
    const { setSelectedSeats, customerName, setCustomerName, customerCPF, setCustomerCPF } = useContext(CartContext);
    const [seats, setSeats] = useState([]);
    const { idSessao } = useParams();
    const [seatsStates, setSeatsStates] = useState([]);
    
    useEffect(() => {
        const arrayOfstates = [
            { isSelected: false, name: 1 }, { isSelected: false, name: 2 }, { isSelected: false, name: 3 }, { isSelected: false, name: 4 }, { isSelected: false, name: 5 }, { isSelected: false, name: 6 }, { isSelected: false, name: 7 }, { isSelected: false, name: 8 }, { isSelected: false, name: 9 }, { isSelected: false, name: 10 }, { isSelected: false, name: 11 }, { isSelected: false, name: 12 }, { isSelected: false, name: 13 }, { isSelected: false, name: 14 }, { isSelected: false, name: 15 }, { isSelected: false, name: 16 }, { isSelected: false, name: 17 }, { isSelected: false, name: 18 }, { isSelected: false, name: 19 }, { isSelected: false, name: 20 }, { isSelected: false, name: 21 }, { isSelected: false, name: 22 }, { isSelected: false, name: 23 }, { isSelected: false, name: 24 }, { isSelected: false, name: 25 }, { isSelected: false, name: 26 }, { isSelected: false, name: 27 }, { isSelected: false, name: 28 }, { isSelected: false, name: 29 }, { isSelected: false, name: 30 }, { isSelected: false, name: 31 }, { isSelected: false, name: 32 }, { isSelected: false, name: 33 }, { isSelected: false, name: 34 }, { isSelected: false, name: 35 }, { isSelected: false, name: 36 }, { isSelected: false, name: 37 }, { isSelected: false, name: 38 }, { isSelected: false, name: 39 }, { isSelected: false, name: 40 }, { isSelected: false, name: 41 }, { isSelected: false, name: 42 }, { isSelected: false, name: 43 }, { isSelected: false, name: 44 }, { isSelected: false, name: 45 }, { isSelected: false, name: 46 }, { isSelected: false, name: 47 }, { isSelected: false, name: 48 }, { isSelected: false, name: 49 }, { isSelected: false, name: 50 },
        ]
        setSeatsStates(arrayOfstates);
    }, []);

    useEffect(() => {
        if(idSessao) {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`);
            request.then((res) => {setSeats(res.data.seats)});
        }
    }, [idSessao]);

    function updateSeats(seat, index) {
        if(seat.isAvailable) {
            let previousStates = seatsStates;
            previousStates[index].isSelected = !previousStates[index].isSelected;
            setSeatsStates([...previousStates]);
        }
        else {alert("Assento indisponível!")}
    }

    function finishOrder() {
        const selectedStates = seatsStates.filter(seat => seat.isSelected);
        const preSelectedSeats = [];
        selectedStates.forEach(state => {
            for(let i = 0; i < seats.length; i++) {
                if(seats[i].name == state.name) {preSelectedSeats.push(seats[i])}
            }
        })
        setSelectedSeats(preSelectedSeats);
    }

    return (
        <SessionSeatsBox>
            <Intro>Selecione o(s) assento(s)</Intro>
            <SeatsDisplay>
                {seats && seats.map((seat, index) => (
                    <Seat isSelected={seatsStates[index].isSelected} isAvailable={seat.isAvailable} key={index} onClick={() => updateSeats(seat, index)}>{seat.name}</Seat>
                ))}
            </SeatsDisplay>
            <SeatsExample/>
            <CustomerFields>
                <FieldTag>Nome do comprador:</FieldTag>
                <input placeholder="Digite seu nome..." onChange={event => setCustomerName(event.target.value)} value={customerName}></input>
                <FieldTag>CPF do comprador:</FieldTag>
                <input placeholder="Digite seu CPF..." onChange={event => setCustomerCPF(event.target.value)} value={customerCPF}></input>
            </CustomerFields>
            <Link to={`/sucesso`} style={{ textDecoration: 'none'}}>
                <FinishButton onClick={() => finishOrder()}><h1>Reservar assento(s)</h1></FinishButton>
            </Link>
        </SessionSeatsBox>
    )
}

const SessionSeatsBox = styled.div`
    width: 100%;
    height: calc(100vh - 184px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    scrollbar-width: none;
`;

const Intro = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
`;

const SeatsDisplay = styled.div`
    width: 314px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const Seat = styled.div`
    min-width: 26px;
    height: 26px;
    border-radius: 12px;
    background: ${props => 
        props.isSelected && props.isAvailable ? "#8DD7CF" 
        : props.isSelected && !props.isAvailable ? "#FBE192" 
        : !props.isSelected && props.isAvailable ? "#C3CFD9"
        : "#FBE192"
    };
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2.5px 18px 2.5px;
    font-family: Roboto;
    font-size: 11px;
    line-heoght: 13px;
    color: #000000;
    border: 1px solid #808F9D;
    cursor: pointer;
`;

const CustomerFields = styled.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    margin: 0 0 50px 0;
    input {
        height: 50px;
        padding-left: 15px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: Roboto;
        font-style: italic;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }
`;

const FieldTag = styled.h1`
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    margin: 10px 0 5px 0;
`;

const FinishButton = styled.button`
    width: 225px;
    min-height: 42px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 30px;
    h1 {
        font-family: Roboto;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`;