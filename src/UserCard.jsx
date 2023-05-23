

import React from 'react';

function UserCard({ user, isPremium }) {
  return (
    <div className="user-card" style={{ border: '1px solid black', padding: '10px',backgroundColor:'purple' }}>
      <h2>{user.nome}</h2>
      <p>Idade: {user.idade}</p>
      <p>Cidade: {user.cidade}</p>
      {!isPremium && <p>Usuário Premium</p>} 
      {isPremium && <p>Usuário não Premium</p>} 
    </div>
  );
}

export default UserCard;

