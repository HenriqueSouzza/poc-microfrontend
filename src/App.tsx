import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { styled } from "@stitches/react";
import { Routes as AppRoutes } from "./Routes";
import { Domains, Emails, Sites } from "./pages";

import "./index.scss";

const Container = styled('div', {
  width: '100%',
  height: '100vh',
  background: '#aaaa',
  display: 'flex'
});

const Sidebar = styled('div', {
  width: '200px'
})

const Content = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center'
});

const App = () => (
  <Container>
    <Sidebar>
      <AppRoutes />
    </Sidebar>
    <Content>
      <React.Suspense fallback={'loading....'}>
        <Routes>
          <Route path="/sites" element={<Sites />} />
          <Route path="/emails-list" element={<Emails />} />
          <Route path="/dominios" element={<Domains />} />
        </Routes>
      </React.Suspense>
    </Content>
  </Container>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
