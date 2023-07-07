import React from 'react';

export const StringList = (props) => {
    //Copy of array
    // You need to read about deep copying of object
    const newArr = [...props.list, props.list.length];



    const string = newArr
        .join(', ');

    return <p>{string}</p>;

}

