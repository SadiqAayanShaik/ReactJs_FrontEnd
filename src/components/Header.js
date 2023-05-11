import React, { Component } from 'react';
 
class Header extends Component {
   constructor(props){
       super(props)

       this.state={

       }
   }
   render() {
       return (
           <div>
               <nav className='navbar navbar-dark bg-dark'>
                   <div><a className='navbar-brand' href='www.google.com'>Employee Management App</a></div>
               </nav>
           </div>
       );
   }
}

export default Header;