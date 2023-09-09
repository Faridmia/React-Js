import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Clock({locale}) {
//   return (
//     <h1 className='heading'>
//       <span className='text'>hello world {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

class Clock extends React.Component {
    render() {
       
      return (
          <h1 className='heading'>
            <span className='text'>hello world {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
          </h1>
      );
        
    }
}

// ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById('root'));
ReactDOM.render(<Clock locale="bn-BD">hello academy</Clock>, document.getElementById('root'));