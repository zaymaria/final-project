import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AppLayout from './containers/AppLayout';
import Caught from './routes/Caught';
import Description from './routes/Description';
import PokemonList from './components/PokemonList'

ReactDOM.render(
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/caught" element={<Caught />} />
        <Route exact path="/description/:id" element={<Description />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: 'darkblue', fontWeight: 800, fontSize: 26 }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
      </Routes>
    </AppLayout>
  </BrowserRouter>,
  document.getElementById('root')
);
