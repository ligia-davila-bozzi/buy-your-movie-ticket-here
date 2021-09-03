import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Catalog from './Catalog';

export default function App() {

    return (
        <BrowserRouter>
            <Body>
                <Header/>
                <Switch>
                    <Route path="/" component={Catalog} exact/>
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;