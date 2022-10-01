import logo from './logo.svg';
// import './App.css';
import BlogHome from './BlogCards';

import { isArrayEmpty as checkArrayIsEmpty } from './utils';

function App() {
  const firstname = 'farid';
  const lastname = 'update';
  const age = 28;
  const job = 'gentleman';

  const mArr = [1,2,3,4];

  const mObj = {
      name: 'toto company',
      age: 35
  }

  const blogArr2 = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'lorem ipsum data'
    },
    {
      id: 2,
      title: 'Blog Title 1',
      description: 'lorem ipsum data'
    },
    {
      id:3,
      title: 'Blog Title 1',
      description: 'lorem ipsum data'
    },
    {
      id:4,
      title: 'Blog Title 1',
      description: 'lorem ipsum data'
    },
]

  const blogCards = checkArrayIsEmpty(blogArr2) ? [] : blogArr2.map(( item,pos ) => {
      return (
        <BlogHome className='blog' key={pos} id={item.id} title={item.title} description={item.description}  />
      //   <div className='card-data' key={item.id}>
      //    <h3>{item.title}</h3>
      //    <p>{item.description}</p>
      // </div>
      );
  })
  

  const getFullName = (firstname,lastname) => {
    return `${firstname} ${lastname}`;
  }

  const inputplaceholder = 'Enter Your Details';

  const detailsInputBox = <input placeholder={inputplaceholder} autoComplete />;

  // const styles = {
  //   margin: '16px',
  //           padding: '16px',
  //           boxSizing:'border-box',
  //           borderRadius: '5px',
  //           boxShadow: '0 2px 5px #333'
  // }
  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
