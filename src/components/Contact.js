
import React, { useState } from 'react';
function Contact() {
    {
     return (

        <div className='container-contact'>
            <div className='contact-container'>
                <p>Are you looking for  a self-motivated, quick learner and proactive developer?</p>
                <p>Get In touch!</p>
                <p>Email: erikalls18@hotmail.com</p>
                <a href="https://www.linkedin.com/in/erika-leguizamón/">
                    <img src="/images/linkedin.png" width={50} height={50} className="img-contact" alt="java-logo"/>
                </a>

                <a href="https://github.com/erikalls18">
                    <img src="/images/git-logo.png" width={60} height={60} className="img-contact" alt="java-logo"/>
                </a>
                
                <a href="mailto:erikalls18@hotmail.com">
                    <img src="/images/mail.png" width={50} height={50} className="img-contact" alt="java-logo"/>
                </a>
            </div>
          
      </div>
    );
  }
  
       
}
 
 export default Contact;