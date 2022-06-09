import React, {Component} from "react";

import TourCard from 'components/TourCard';

export default class TourCardContainers extends Component<any, any>
{
    constructor(props: any)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="tour-card__container">
                <TourCard/>
                <TourCard/>
                <TourCard/>
                <TourCard/>
                <TourCard/>
            </div>
        );
    }
}