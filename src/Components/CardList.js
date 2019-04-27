import React from 'react';
import Card from "./Card";

function CardList({robots}) {
    // const cardArray = robots.map((user,i) => {
    //     return <Card key = {i} id = {user.id} name = {user.name} email = {user.email}/>
        // return <Card id = {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>

    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card key = {i} id = {user.id} name = {user.name} email = {user.email}/>
                    );
                })
            }
        </div>

    );
    
}

export default CardList;
