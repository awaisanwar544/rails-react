import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGreeting } from '../redux/greetings/greetings'
import './HelloWorld.css'

function HelloWorld() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const greeting = useSelector((state) => state.greeting);
  const fetching = useSelector((state) => state.fetching);
  return (
    <React.Fragment>

      {!fetching && (
        <div className="flex f-column">
          <h3>Greeting:</h3>
          <p className="font-Arial text-bold text-green"> {greeting} </p>
        </div>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </React.Fragment>
  );
}

export default HelloWorld
