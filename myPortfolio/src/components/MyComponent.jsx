import React, { useContext } from 'react';
import './MyComponent.css';
import { ThemeContext } from './ThemeProvider';

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="my-component">
      <h1>Meu Componente</h1>
      <p>Este é um exemplo de como alterar as variáveis de cor usando React.</p>
      <button onClick={toggleTheme}>Mudar Cores</button>
    </div>
  );
}

export default MyComponent;
