import React from 'react';
import Image from './img_butterfl.jpg';
class Basics extends React.Component { 
    render() { 
        return(
            <div>
                <h4>this is a page to learn basics on html css bootstrap and react</h4>
                <a href="https://www.google.com">This is to check the link function of html</a>
                <br />
               <img src={Image} width="200" height="200" alt="This is butterfl" />
            </div>
        )
    }
}
export default Basics;