import styled from 'styled-components';

export default function Catalog() {
    return (
        <CatalogBox>
            <Intro>Selecione o filme</Intro>
            <Movies>
                <h1>OS FILMES VÃO AQUI</h1>
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
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin: 30px 0 30px 0;
`;

const Movies = styled.div`
    width: 100%;
    height: calc(100vh - 155px);
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
`;