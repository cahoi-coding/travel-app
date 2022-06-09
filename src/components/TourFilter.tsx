import React, {Component} from "react";

import { FcSearch } from "react-icons/fc";

export default class TourFilter extends Component<any, any>
{
    render()
    {
        return(
            <div className="tour__filter">
                <label htmlFor="searching" className="searching">
                    <input type="text" id="searching" placeholder="search..." name="searching"/>
                    <button type="submit" className="searching__button">
                        <span>search</span>
                    </button>
                </label>
            </div>
        );
    }
}