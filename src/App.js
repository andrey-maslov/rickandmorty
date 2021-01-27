import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { List } from "./components/list/List";
import { Article } from "./components/article/Article";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main className="main">
                    <Switch>
                        <Route exact path="/" render={ () => <List /> } />
                        <Route path="/:id" render={ () => <Article /> } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
