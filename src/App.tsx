import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Emissao } from './pages/Emissao';
import { FormCnpj } from './pages/FormCnpj';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/emitir-nota" exact component={FormCnpj} />
        <Route path="/emissao-nfse" exact component={Emissao} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
