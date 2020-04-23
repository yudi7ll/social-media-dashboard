import React from 'react';
import PropTypes from 'prop-types';

function SmallBox({
    SocialMediaIcon,
    highlight,
    highlightCount,
    ArrowIcon,
    percentage,
    percentageColor
}) {
    return (
        <div key={ highlightCount } className="smallbox">
            <div className="highlight">
                <div className="highlight__text">{ highlight }</div>
                <div className="highlight__count">{ highlightCount }</div>
            </div>
            <div className="smallbox__social">
                <SocialMediaIcon />
                <div className="percentage percentage--mt">
                    <span className="percentage--mr"><ArrowIcon /></span>
                    <span className={ 'percentage--' + percentageColor }>{ percentage }</span>
                </div>
            </div>
        </div>
    );
}

SmallBox.propTypes = {
    SocialMediaIcon: PropTypes.func,
    highlight: PropTypes.string,
    highlightCount: PropTypes.number,
    ArrowIcon: PropTypes.func,
    percentage: PropTypes.string,
    percentageColor: PropTypes.string
}

export default SmallBox;
