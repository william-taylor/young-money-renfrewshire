
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='heading'>
                    <div className="container">
                        <div className="jumbotron">
                            <h1 className='text-center'>Young Money Renfrewshire</h1>
                            <p className='text-center'>Friendly local advice made and designed for you</p>
                        </div>    
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>What is YMR?</h1><hr/>
                            <p className='justify'>
                                YMR or Young Money Renfrewshire is a website for young adults under 25 who need help with financial problems or questions. We can help with budgeting, where to find deals and where to find the best advice. This application was built in collaboration with the Poverty Alliance, Barnardo’s staff and Renfrewshire Council.
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src='http://www.youngmoneyren.org/images/ymca.jpg' />
                        </div>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src="http://www.youngmoneyren.org/images/barnardos-logo.png" />
                        </div>
                        <div className='col-xs-4 text-center'>
                            <img className='img-responsive img-center' src='http://www.youngmoneyren.org/images/renfrewshire-council.png' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}