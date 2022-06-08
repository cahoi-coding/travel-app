import React from 'react';

export default function TourCard()
{
    return(
        <div className="tour-card">
            <div className="tour-card__image">
                <img
                    src="https://tripi.vn/cdn-cgi/image/width=548,height=310/https://storage.googleapis.com/hms_prod/photo/thumb/457923HBC/photo1.png"
                    alt=""/>
            </div>
            <div className="tour-card__title">
                Lorem ipsum dolor sit amet
            </div>
            <div className="tour-card__rating">*****</div>
            <div className="tour-card__journey">ha loi</div>
        </div>
    );
}