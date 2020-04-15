import React from 'react';
import PropTypes from 'prop-types';

function BigBoxComponent({
    SocialIcon,
    socialMedia,
    user,
    followers,
    followersText = 'FOLLOWERS',
    ArrowIcon,
    posts,
    postsTextColor = 'green'
}) {
	return (
		<div className="bigbox">
            <div className={"bigbox__ribbon bigbox__ribbon--".concat(socialMedia)} />
			<div className="bigbox__account">
				<SocialIcon />
				<span className="bigbox__account--username"> { user }</span>
			</div>
			<div className="bigbox__followers">
				<div className="bigbox__followers--large">{ followers }</div>
				<div
					className="bigbox__followers--small"
				>
                    { followersText }
				</div>
			</div>
			<div className="bigbox__newpost">
				<ArrowIcon />
                <span
                    className={ 'bigbox__newpost--'.concat(postsTextColor) } 
                >
                    { posts + ' Today'}
                </span>
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
