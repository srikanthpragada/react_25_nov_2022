import React from 'react'
import PropTypes from 'prop-types';

export default function Course(props) {
    return (
        <>
            <h2 className="text-danger">{props.title}</h2>
            <h3 className="text-primary">{props.fee}</h3>
        </>
    )
}

Course.propTypes = {
    title: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired
};

