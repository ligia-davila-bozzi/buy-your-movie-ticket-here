import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderBox>
            <Title>CINEFLEX</Title>
        </HeaderBox>
    )
}

const HeaderBox = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;
`;

const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`;