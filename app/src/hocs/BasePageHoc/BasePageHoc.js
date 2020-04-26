import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import './BasePageHoc.scss';

export default function BasePageHoc(HocComponent) {
    return class extends Component {

        render() {
            return (
                <div className="main-container">
                    <Header />
                    <div className="content">
                        <div className="search-bar">
                            <Search />
                        </div>
                        <div className="main-content">
                            <div className="cocktails-list">
                                <HocComponent {...this.props}></HocComponent>
                            </div>
                        </div>
                    </div>
                </div>);
        }
    }
}