import React, {Component} from "react";

import TourCardContainers from 'containers/TourCardContainers';
import TourFilter from "components/TourFilter";

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
                {/*<div className="tour-page__intro">*/}
                {/*    Uay Uay Uay Uay*/}
                {/*</div>*/}
                <div className="tour-page__body">
                    <TourFilter/>
                    <div className="tour__cards">
                        <TourCardContainers/>
                        <div className="tour__pagination"></div>
                    </div>
                </div>
            </div>
        );
    }
}