import React from "react";
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_93c11xs', 'template_gvnfnoz', e.target, 'user_2SoA5Tj2yzelg7kX6CWBh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="container-fluid" id="conatct-page">
            <h1 className="text-center p-4">Contact me</h1>   
            <h3 className="text-center p-4">If you want someone <b>hardworking</b>,<b> creative</b> and <b>optimistic</b> in your team.</h3>
            <p className="text-center p-4">I am open for work. Connect with me via phone:<b>+355 976341330</b>  or you can write me on my email: <b>allamaniarjeta@gmail.com</b> </p>
            
            <div className="row">

                <div className="d-flex justify-content-center">
                   
                    <form onSubmit={sendEmail}>
                        <div class="form-group">
                            {/* <label for="exampleInputName">Name</label> */}
                            <input type="text" class="form-control bg-transparent text-center text-light" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your name" name="Name"/>
                        </div>

                        <div class="form-group">
                            <input type="email" class="form-control bg-transparent text-center text-light" id="exampleInputEmail1" placeholder="Enter your email" name="Email"/>
                        </div>

                        <div class="form-group">                           
                            <input type="text" class="form-control bg-transparent text-center text-light" id="exampleInputSubject1" placeholder="Write a subject" name="Subject"/>
                        </div>

                        <div class="form-group">                           
                            <textarea class="form-control bg-transparent text-center text-light" id="exampleFormControlTextarea1" placeholder="Write your message" rows="3" name="Message"></textarea>
                        </div>
                        
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn btn-default" id="butoni">Submit</button>
                        </div>
                    </form>  
                </div>
            </div>
            
        </div>
    )
};


