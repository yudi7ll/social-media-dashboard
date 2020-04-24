import React, { useState } from 'react';
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

const BigBoxWithData = () => [
    {
        SocialIcon: Facebook,
        socialMedia: 'facebook',
        ArrowIcon: ArrowUp,
        user: '@nathanf',
        followers: '1987',
        posts: '12',
    },
    {
        SocialIcon: Twitter,
        socialMedia: 'twitter',
        ArrowIcon: ArrowUp,
        user: '@nathanf',
        followers: '1044',
        posts: '99',
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
        posts: '144',
        postsTextColor: 'red'
    }
].map(BigBox);

const SmallBoxWithData = () => [
    {
        SocialMediaIcon: Facebook,
        highlight: 'Page Views',
        highlightCount: '87',
        ArrowIcon: ArrowUp,
        percentage: '3%',
        percentageColor: 'green'
    },
    {
        SocialMediaIcon: Facebook,
        highlight: 'Likes',
        highlightCount: '52',
        ArrowIcon: ArrowDown,
        percentage: '2%',
        percentageColor: 'red'
    },
    {
        SocialMediaIcon: Instagram,
        highlight: 'Likes',
        highlightCount: '5462',
        ArrowIcon: ArrowUp,
        percentage: '2257%',
        percentageColor: 'green'
    },
    {
        SocialMediaIcon: Instagram,
        highlight: 'Profile Views',
        highlightCount: '52k',
        ArrowIcon: ArrowUp,
        percentage: '1375%',
        percentageColor: 'green'
    },
    {
        SocialMediaIcon: Twitter,
        highlight: 'Retweets',
        highlightCount: '117',
        ArrowIcon: ArrowUp,
        percentage: '303%',
        percentageColor: 'green'
    },
    {
        SocialMediaIcon: Twitter,
        highlight: 'Likes',
        highlightCount: '507',
        ArrowIcon: ArrowUp,
        percentage: '553%',
        percentageColor: 'green'
    },
    {
        SocialMediaIcon: Youtube,
        highlight: 'Likes',
        highlightCount: '107',
        ArrowIcon: ArrowDown,
        percentage: '19%',
        percentageColor: 'red'
    }, 
    {
        SocialMediaIcon: Youtube,
        highlight: 'Total Views',
        highlightCount: '1407',
        ArrowIcon: ArrowDown,
        percentage: '12%',
        percentageColor: 'red'
    }
].map(SmallBox);

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <div className={ isDarkTheme ? 'dark-theme' : 'light-theme' }>
            <div className="container">
                <div className="header">
                    <div className="header__title">
                        <h1>Social Media Dashboard</h1>
                        <h4 className="text--gray">Total Followers: 23,004</h4>
                    </div>
                    <hr />
                    <div className="header__switcher">
                        <label
                            className="text--gray"
                            htmlFor="toggleThemeBtn"
                        >
                            Dark Mode
                        </label>
                        <div className="switch">
                            <input
                                type="checkbox"
                                id="toggleThemeBtn"
                                defaultValue={ isDarkTheme }
                                onClick={ () => setIsDarkTheme(!isDarkTheme) }
                            />
                            <div className="switch__slider"></div>
                        </div>
                    </div>
                </div>
                
                <main>
                    <div className="card">
                        <BigBoxWithData />
                    </div>

                    <h2 className="overview">Overview - Today</h2>
                    <div className="card">
                        <SmallBoxWithData />
                    </div>
                </main>

                <div class="attribution">
                    Challenge by &nbsp;
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Frontend Mentor
                    </a>. &nbsp;
                    Coded by &nbsp;
                    <a
                        href="https://github.com/yudi7ll"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Yudi
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default App;
