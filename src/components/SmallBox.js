import React from 'react';
import PropTypes from 'prop-types';

function SmallBox({
    SocialMediaIcon,
    highlight,
    highlightCount,
    ArrowIcon,
    percentage,
    percentageColor
}, key) {
    return (
        <div key={ key } className="card__box card__box--small">
            <div className="width--100">
                <div className="flex flex--start mb-1">
                    <div className="text--gray mb-1">{ highlight }</div>
                    <div>
                        <SocialMediaIcon />
                    </div>
                </div>
                <div className="flex flex--end mb-1">
                    <div className="text--bigger">{ highlightCount }</div>
                    <div>
                        <ArrowIcon />
                        <small className={ 'text--' + percentageColor }>{ percentage }</small>
                    </div>
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
