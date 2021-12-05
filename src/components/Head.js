import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

export class Head extends Component {
    render() {
        return (
            <div className="wrapper">
                <MetaTags>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>
                        Classic Jaguar, MG, Triumph and Austin Healey Parts Online from EnglishParts.com | EnglishParts.com
                    </title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
                </MetaTags>    
            </div>

        )
    }
}

export default Head
