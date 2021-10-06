import React from 'react';
import IsMe from './IsMe';
import Others from './Others';

const ChatItem = ({isMe, text, date, photo}) => {
    if(isMe){
        return <IsMe text={text} date={date} />
    }
    return <Others text={text} date={date} photo={photo}/>
    
};

export default ChatItem;

