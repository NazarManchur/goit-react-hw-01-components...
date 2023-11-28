import React from "react";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Friend } from "./FriendList";
import { TransactionList } from "./TransactionHistory";




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
      <Friend />
      <TransactionList/>
    </div>
  );
};
