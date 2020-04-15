import React from 'react';
import './App.css';
import BigBox from './components/BigBox';
import SmallBox from './components/SmallBox';
import {
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	ArrowUp,
	ArrowDown,
} from './components/Icons';

function App() {
	const AccountProfiles = () => [
		{
			SocialIcon: Facebook,
            socialMedia: 'facebook',
			ArrowIcon: ArrowUp,
			user: '@nathanf',
			followers: '1987',
			posts: '12'
		},
		{
			SocialIcon: Twitter,
            socialMedia: 'twitter',
			ArrowIcon: ArrowUp,
			user: '@nathanf',
			followers: '1044',
			posts: '99'
		},
		{
			SocialIcon: Instagram,
            socialMedia: 'instagram',
			ArrowIcon: ArrowUp,
			user: '@realnathanf',
			followers: '11k',
			posts: '1099'
		},
		{
			SocialIcon: Youtube,
            socialMedia: 'youtube',
			ArrowIcon: ArrowDown,
			user: 'Nathan F.',
			followers: '8239',
            followersText: 'SUBSCRIBERS',
			posts: '144',
            postsTextColor: 'red'
		}
	].map(BigBox);

  return (
		<>
			<div className="header">
				<div className="header__left">
					<h2 className="header__left--large">Social Media Dashboard</h2>
					<h4 className="header__left--small">Total Followers: 23,004</h4>
				</div>
				<div className="header__right">
					<label htmlFor="toggleThemeBtn">Dark Mode</label>
					<input type="checkbox" id="toggleThemeBtn" />
				</div>
			</div>
			
			<div className="main">
				<AccountProfiles />
                <SmallBox />
			</div>
		</>
  );
}

export default App;
