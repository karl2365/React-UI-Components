import React from 'react';
import './Card.css';

function CardContent() {
    return(
        <div>
            <p class='card-content'><strong>Get started with React</strong></p>
            <p class='card-content'>React makes it painless to create interactive UIs. Design simple views for each state in you application.</p>
            <p class="lighter card-content">reactjs.org</p>
        </div>
    );
}

export default CardContent;
