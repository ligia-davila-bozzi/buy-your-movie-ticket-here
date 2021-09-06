import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import CartContext from '../contexts/CartContext';

export default function OrderDone() {
    const { selectedMovie, setSelectedMovie, selectedSession, setSelectedSession, selectedTime, setSelectedTime, selectedSeats, setSelectedSeats, customerName, setCustomerName, customerCPF, setCustomerCPF } = useContext(CartContext);

    useEffect(() => {
        let ids = selectedSeats.map(seat => parseInt(seat.name));
        let body = {ids: ids, name: customerName, cpf: customerCPF};
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, body);
        request.then((res) => {console.log("Sucesso!!!")});
    }, []);

    function clearAll() {
        setSelectedMovie({});
        setSelectedSession();
        setSelectedTime();
        setSelectedSeats([]);
        setCustomerName();
        setCustomerCPF();
    }

    return(
        <OrderDoneBox>
            <Intro>Pedido feito com sucesso!</Intro>
            <OrderInfo>
                <Section>
                    <Title>Filme e sessão</Title>
                    <Content>{selectedMovie.title}</Content>
                    <Content>{selectedSession.date} {selectedTime}</Content>
                </Section>
                <Section>
                    <Title>Ingressos</Title>
                    {selectedSeats.map((seat, index) => (
                        <Content>Assento {seat.name}</Content>
                    ))}
                </Section>
                <Section>
                    <Title>Comprador</Title>
                    <Content>Nome: {customerName}</Content>
                    <Content>CPF: {customerCPF}</Content>
                </Section>
                <Link to={`/`} style={{ textDecoration: 'none'}}>
                    <HomeButton onClick={() => clearAll()}><h1>Voltar para a home</h1></HomeButton>
                </Link>
            </OrderInfo>
        </OrderDoneBox>
    )
}

const OrderDoneBox = styled.div`
    width: 100%;
    height: calc(100vh - 67px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Intro = styled.div`
    width: 180px;
    display: flex;
    flex-flow: row wrap;
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #247A6B;
    margin: 30px 0 30px 0;
`;

const OrderInfo = styled.div`
    width: 100%;
    height: calc(100vh - 153px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    scrollbar-width: none;
`;

const Section = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin-bottom: 5px;
`;

const Content = styled.h1`
    font-family: Roboto;
    font-size: 22px;
    line-height: 26px;
    color: #293845;
    margin-bottom: 3px;
`;

const HomeButton = styled.button`
    width: 225px;
    min-height: 42px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 30px;
    h1 {
        font-family: Roboto;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`;