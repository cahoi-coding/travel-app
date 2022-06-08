import React, {Component} from "react";

import TourCardContainers from 'containers/TourCardContainers';

export default class Tour extends Component<any, any>
{
    constructor(props: any)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="tour-page">
                <TourCardContainers/>
            </div>
        );
    }
}