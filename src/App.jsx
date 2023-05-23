import React from 'react';
import UserCard from './UserCard';

function App() {
  const users = [
    {
      nome: 'Charle',
      idade: '32',
      cidade: 'Monte Alegre de Minas',
      isPremium: true,
    },
    {
      nome: 'Maria',
      idade: '28',
      cidade: 'São Paulo',
      isPremium: false,
    },
    {
      nome: 'João',
      idade: '35',
      cidade: 'Rio de Janeiro',
      isPremium: true,
    },
  ];

  return (
    <div>
      {/* lista de usuários e renderizar um UseCard para cada usuário  */}
      {users.map((user, index) => (
                 
        <UserCard key={index} user={user} isPremium={user.isPremium} />
      ))}
    </div>
  );
}

export default App;

