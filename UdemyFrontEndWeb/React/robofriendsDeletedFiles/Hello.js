import { Component } from 'react';
import './Hello.css';

// Below is the class component code way
// class Hello extends Component{
//     render () {
//         return (
//             <div class='f1 tc'>
//                 <h1>Hello World</h1>
//                 <p>{this.props.greeting}</p>
//             </div>
//         )
//     }
// }


// Below is the function component code way
const Hello = (props) => {
    return (
        <div className='f1 tc'>            
                 <h1>Hello World</h1>
                 <p>{props.greeting}</p>
        </div>
    )
}
export default Hello;