import React from 'react';
import styled  from 'styled-components';

let Button = styled.button`
        border: 2px solid black;
        background-color: white;
        color: black;
        padding: 15px 20px;
        font-size: 20px;
        cursor: pointer;
        border-color: aqua;
        color: rgb(11, 143, 143);
        margin-top: 20px;
        margin-bottom: 20px;
        &:hover {
            background-color: aqua;
            color: white;
        }



`;

export default class StyledCOmponent extends React.Component {
    render() {
        return(
                <div>
                    <Button>Go Eduwork</Button>
                </div>
        )
    }
}