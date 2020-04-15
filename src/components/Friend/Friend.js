import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Friend.css';
import List from '../List/List';
import Cart from '../Cart/Cart';

const Friend = () => {

  const [users, setUsers] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddFriend = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  
    return(
      <div className="friend-container">
        
        <div className="list-container">
          {
            users.map(user => <List
              handleAddFriend = {handleAddFriend}
              user={user}></List>)
          }
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    )
  }
  
export default Friend;