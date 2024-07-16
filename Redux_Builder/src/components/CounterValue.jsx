import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector((state) => state.counter);
  const theme = useSelector((state) => state.theme);
  const className = theme === 'light' ? 'light_theme' : 'dark_theme';

  return <div className={className}>Counter Value: {counter}</div>;
};

export default CounterValue;
