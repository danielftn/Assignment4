import React from "react";
import Header from "./Header.js";
import LoginForm from "./LoginForm.js";
import Footer from "./Footer.js";

function LoginPage(){
    return(
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}
export default LoginPage;