import React, {useEffect} from 'react';

export const StringList = (props) => {
    //Copy of array
    // You need to read about deep copying of object
    const newArr = props.list

    const string = newArr
        .join(', ');

    useEffect(() => {
            console.log('Zmiania się lista!!!');
    }, [props.list]);

    return <p>{string}</p>;

}

