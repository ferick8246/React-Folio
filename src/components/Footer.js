import React from  "react";

export default function Footer() {
    return(
        <footer className="bg-gray-800 md:sticky bottom-0">
            <div className="container mx-auto flex justify-center items-center text-center grid grid-rows-2">
                <div className="ml-3 text-xl">
                    Made with React
                </div>
                <div className="flex">
                    <a href="https://github.com/ferick8246"><img src="https://img.icons8.com/nolan/64/github.png"/></a>
                    <a href="mailto:ferick8246@gmail.com"><img src="https://img.icons8.com/nolan/64/apple-mail.png"/></a>
                    <a href="tel:281-330-8004"><img src="https://img.icons8.com/nolan/64/phone.png"/></a>
                    <a href="https://www.linkedin.com/in/erick-flores-142369184/"><img src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
                </div>
            </div>
        </footer>
    );
}