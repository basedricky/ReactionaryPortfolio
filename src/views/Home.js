import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jabs from '../assets/JabEffects.png'
import Practice from '../assets/application.gif'
import Burger from '../assets/burger.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <div>
            <div className="container p-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />
                <hr className="my-2" />
                <h2 className="display-4 pl-3">Project 2: Jab Effects</h2>
                <Row>
                    <Col sm={7}>
                        <figure className="figure" />
                        <img src={Jabs} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded"
                            alt="A thumbnail of Jab Effects" />
                        <figcaption className="figure-caption">A screenshot of the deployed Jab Effects application.</figcaption>
                    </Col>
                    <Col sm={5} my-auto> This project was a huge team endeavor that involved utilization of MySql, Express,
                        Passport, Handlebars, and more. It is intended to collect COVID-19 Vaccine Symptom data and display it in Graphs <br /><br />
                        <p>Deployed Application: <a href='https://jab-effects.herokuapp.com/'>Jab Effects</a></p>
                        <p>Github Repository: <a href='https://github.com/krcook1980/Jabs'>https://github.com/krcook1980/Jabs</a></p>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                    <h2 className="display-4 pl-3 text-right ">Project 1: My Practice Companion</h2>
                    <Col sm={7}>
                        <br /> <br /><br /> <br />
                        <p>This application was developed with my previous project group. Our goal was to develop a practice companion
                        to assist with learning Major Chords. We used a number of dynamically generated elements, and the YouTube Search API.</p><br />
                        <p>Deployed Application: <a href='https://kayvonk.github.io/MyPracticeCompanion/'>My Practice Companion</a></p>
                        <p>Github Repository: <a href='https://github.com/Kayvonk/MyPracticeCompanion'>https://github.com/Kayvonk/MyPracticeCompanion</a>
                        </p>
                    </Col>

                    <Col>
                        <div className="col-sm-7">
                            <img src={Practice} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded"
                                alt="Gif of deployed practice app" />
                            <figcaption className="figure-caption text-center">GIF of My Practice Companion.</figcaption>
                        </div>
                    </Col>
                </Row>
                <hr className="my-2" />
                <h2 className="display-4 pl-3">Whomsts-Burger!</h2>
                <Row>
                    <Col sm={6}>
                        <figure className="figure" />
                        <img src={Burger} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded" alt="A thumnbail of Take Note app" />
                        <figcaption className="figure-caption">A screenshot of the deployed whomsts-burgerapplication.</figcaption>
                    </Col>
                    <Col sm={6} my-auto>
                        <br /> <br /><br /> <br />
                    This node.JS application was created to deepen my understanding of express, express-handlebars, MYSQL, and Heroku. <br /><br />
                        <p>Deployed Application: <a href='https://whomsts-burger.herokuapp.com/'>Whomsts-Burger</a></p>
                        <p>Github Repository: <a href='https://github.com/basedricky/HamBRRRRRRger'>https://github.com/basedricky/HamBRRRRRRger</a></p>
                    </Col>
                </Row>
            </div>
            <br /><br /><br />
            <footer>
                <div className="card text-black fixed-bottom align-items-center">
                    <div className="card-body">
                        <h4 className="card-title text-muted">ricky@dragonflyut.com</h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}
