import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;
