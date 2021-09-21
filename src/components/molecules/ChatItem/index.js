import React from 'react';
import IsMe from './IsMe';
import Others from './Others';

const ChatItem = ({isMe}) => {
    if(isMe){
        return <IsMe />
    }
    return <Others />
    
};

export default ChatItem;

