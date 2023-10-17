import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   const data = axios.get('https://jsonplaceholder.typicode.com/todos/1/');
  //   data.then(response => {
  //     setData(response.data)
  //     // axios.의 공식과 같은 코드입니다. 외울필요가 없습니다.
  //   })
  // }
  const onClick = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1/');
    
      setData(data.data)
      // a

  const App = () => {
    return <NewsList />;
    };
    
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data &&
        <textarea rows={7} cols={30} readOnly={true}
          value={JSON.stringify(data, null, 2)} />
      }




    </div>
  );

  
};
export default App;