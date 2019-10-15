import React, { useState, useEffect } from 'react';
import withAuth from '../axios';

export default function FriendsList(props) {

  // const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    withAuth().get('http://localhost:5001/api/friends')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        // props.history.push('/'); // could be improved
        alert(error.response.data.message);
      });
  }, []);

  // the request still goes out :(
  // if(!localStorage.getItem('token')) {
  //   return <Redirect to="/login" />
  // }

  return (
    <div className='quotes'>
      {/* {
        quotes.map(q => (
          <li key={q.id}>{q.text}</li>
        ))
      } */}
    </div>
  );
}
