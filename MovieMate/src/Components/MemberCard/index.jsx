import React from 'react';
import teamData from '../../teamData';
import './style.css';

const MemberCard = (props) => {

    const member = teamData.find(item => item.id === props.match.params.userId)

    return (
        <div className="MemberCard">
            <h1 className="MemberCard__name">{member.name}</h1>
            <h2 className="MemberCard__career">{member.career}</h2>
            <img src={member.img} width="500px" heigth="500px" className="MemberCard__img" alt=''/>
        </div>
    );
}

export default MemberCard;
