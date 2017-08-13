import React, { Component } from 'react';
import './theme/css/main.css';

// https://html5up.net/aerial
export default class Aerial extends Component {
    componentDidMount() {
        document.body.className = '';
    }

    render() {
        const info = {
            name: "Jacob Jang",
            realName: "Seong Hyeok, Jang",
            job: "Software Engineer",
            company: "Kakao Corp"
        }

        const address = {
            linkein: "https://www.linkedin.com/in/seong-hyeok-jang-8357a8137/",
            twitter: "",
            facebook: "",
            blog: "http://mcpaint.tistory.com",
            github: "https://github.com/mcpaint",
            mail: "mcppaint@gmail.com"
        }

        return (
            <div id="wrapper">
                <h1>ddd</h1>
                <div id="bg"></div>
                <div id="overlay"></div>
                <div id="main">

                    <header id="header">
                        <h1>{info.name}</h1>
                        <p>
                            {info.realName}<br/>
                            {info.job} &nbsp;&bull;&nbsp; {info.company}
                        </p>
                        <nav>
                            <ul>
                                <li><a href={address.linkein} className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                                <li><a href={address.blog} className="icon fa-dribbble"><span className="label">Blog</span></a></li>
                                <li><a href={address.github} className="icon fa-github"><span className="label">Github</span></a></li>
                                <li><a href={address.facebook} className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href={`mailto:${address.mail}`} className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                            </ul>
                        </nav>
                    </header>

                    <footer id="footer">
                        <span className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
                    </footer>

                </div>
            </div>
        );
    }
}