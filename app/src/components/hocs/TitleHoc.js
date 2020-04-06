import React, {Component } from 'react';

export default function TitleHoc(HocComponent){
    return class extends Component{

        render(){
            return (
                <div>
                    <h2>This is my custom title.</h2>
                    <HocComponent {...this.props}></HocComponent>
                </div>
            );
        }
    }
}