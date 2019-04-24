import React from 'react';

function TweetSingle({
    photo,
    text,
    fullName,
    userId,
    tweetDate,
    imgUrl
}) {
    return (
        <div className='container'>
            <div className="row card blue-grey darken-1">
                <img src={photo} className='circle responsive-img col s2' />
                <strong className="col s3">{fullName}</strong>
                <span className="col s1">{userId}</span>
                <span className="col s4">{(new Date(tweetDate)).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <p className="col s8 white-text">{text}</p>
                <img className="responsive-img" src={imgUrl} />
            </div>
            
        </div>
    );
}

export default TweetSingle;
