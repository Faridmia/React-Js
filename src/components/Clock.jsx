import React from "react";
import Button from "./Button";
class Clock extends React.Component {
    // constructor(props) {
    //     super(props);

    //    // this.state = { date: new Date() };
    //     this.state = { date: new Date(), locale: 'bn-BD' };

    //     this.handleClick = this.handleClick.bind(this); // this undefined remove korar jonno

    // }

    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();   
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState ({
            date: new Date(),
        });
    }

    // first way

    // handleClick(e) {   
    //    // e.preventDefault();
    //     this.setState ({
    //         locale: 'en-US',
    //     });
    // }

    // second way

    // handleClick = (e) => {  // this ar problem solving
    //     // e.preventDefault();
    //      this.setState ({
    //          locale: 'en-US',
    //      });
    // }

    // third way

    handleClick = (locale) => {
       // e.preventDefault();
        this.setState ({
            locale,
        });
    }

    render() {

    const { date, locale } = this.state; // object tak k destructor kora 

    // let button;

    // if( locale === 'bn-BD') {
    //     button = <Button change={this.handleClick} locale="en-US">
    //         Click Here
    //     </Button>;
    // } else {
    //     button = <Button change={this.handleClick} locale="bn-BD">
    //         Click Here
    //     </Button>;
    // }
       
      return (
        <div>
            <h1 className='heading'>
                <span className='text'>hello world {this.props.children} {date.toLocaleTimeString(locale)}</span>
            </h1>
            {/* <button type="button" onClick={this.handleClick.bind(this,'en-US')}>Click Here</button> */}
            {locale === 'bn-BD' ? (<button type="button" change={this.handleClick} locale="en-US" show={false}/>) : (<button type="button" change={this.handleClick} locale="bn-BD" show/>) }
        </div>
          
      );
        
    }
}

export default Clock;