import React from 'react';
import Header from './features/header/Header'
import TodoList from './features/todos/TodoList';
import Footer from './features/footer/Footer'
import { Card } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Card style={{ width: 300 }}>
        <Header />
        <TodoList />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
