import styled from 'styled-components';

export default function MovieSessions() {
    return (
        <MovieSessionsBox></MovieSessionsBox>
    )
}

const MovieSessionsBox = styled.div`
    width: 100%;
    height: calc(100vh - 67px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;