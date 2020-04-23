import React from 'react';
import PropTypes from 'prop-types';

function BigBoxComponent({
    SocialIcon,
    socialMedia,
    user,
    followers,
    ArrowIcon,
    posts,
    postsTextColor = 'green'
}, key) {
	return (
		<div key={ key } className="card__box card__box--large">
            <div className={ "card__ribbon card__ribbon--" + socialMedia } />
			<div className="icon-text-center">
				<SocialIcon />
				<small className="text--gray">{ user }</small>
			</div>
			<div className="card__followers">
				<div className="text--big">{ followers }</div>
                <small className="text--gray">{ socialMedia === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS' }</small>
			</div>
			<div className="icon-text-center">
                <ArrowIcon />
                <small
                    className={ 'text--' + postsTextColor } 
                >
                    { posts + ' Today' }
                </small>
			</div>
		</div>
	);
}

BigBoxComponent.propTypes = {
    SocialIcon: PropTypes.func,
    socialMedia: PropTypes.string,
    user: PropTypes.string,
    followers: PropTypes.number,
    followersText: PropTypes.string,
    ArrowIcon: PropTypes.func,
    posts: PropTypes.number,
    postsTextColor: PropTypes.string,
}

export default BigBoxComponent;
