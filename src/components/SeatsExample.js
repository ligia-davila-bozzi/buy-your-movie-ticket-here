import styled from 'styled-components';

export default function SeatsExample() {
    const examples = [
        { status: "selected", text: "Selecionado", id: 1 },
        { status: "available", text: "Disponível", id: 2 },
        { status: "unavailable", text: "Indisponível", id: 3 }
    ]

    return(
        <SeatsExampleBox>
            {examples.map((example, index) => (
                <Example key={index}>
                    <ExampleSeat color={example.status}></ExampleSeat>
                    <ExampleTag>{example.text}</ExampleTag>
                </Example>
            ))}
        </SeatsExampleBox>
    )
}

const SeatsExampleBox = styled.div`
    width: 314px;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0 10px 0;
`;

const Example = styled.div`
    width: 90px;
    height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExampleSeat = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => props.color === "available" ? "#C3CFD9" : props.color === "unavailable" ? "#FBE192" : "#8DD7CF"};
    border: 1px solid ${props => props.color === "available" ? "#7B8B99" : props.color === "unavailable" ? "#F7C52B" : "#1AAE9E"};
    border-radius: 17px;
`;

const ExampleTag = styled.h1`
    font-family: Roboto;
    font-size: 13px;
    line-height: 15px;
    color: #4E5A65;
`;