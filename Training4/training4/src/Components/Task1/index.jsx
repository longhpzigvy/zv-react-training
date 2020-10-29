import React, {useState, useEffect} from 'react';
import {debounce} from 'lodash';

const Task1 = props => {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      fetch('https://official-joke-api.appspot.com/random_joke').then(res => res.json()).then(json => {
        setItems([...items, json]);
        setIsLoaded(true);
      });
    }, []);
    useEffect(() => {
    }, [items]);
    const getMoreJoke = debounce(async () => {
      try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const json = res.json();
        setItems([...items, json]);
      } catch (error) {

      }
    }, 5000); 
    if (!isLoaded) {
      return (
        <div>
          Loading.....
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={getMoreJoke}>Get more joke.</button>
          <ul>
            {items.map((item, index) => (
              <li key = {index}>
                {item.setup} - {item.punchline}
              </li>
            ))}
          </ul>
        </div>
      );
    }
}
export default Task1;