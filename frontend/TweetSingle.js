import React from 'react';

function TweetSingle({
    photo,
    text,
    fullName,
    userId,
    tweetDate
}) {
    return (
        <div className='container'>
            <img src={photo} className=''/>
            <strong>{fullName}</strong>
            <span>{userId}</span>
            <span>{(new Date(tweetDate)).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <p>{text}</p>
        </div>
    );

}

export default TweetSingle;