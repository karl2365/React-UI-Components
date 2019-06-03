import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle() {
    return (
        <p>Lambda School <span class="date">@LambdaSchool - {moment().format('D MMM')}</span></p>
    );
}


export default HeaderTitle;
