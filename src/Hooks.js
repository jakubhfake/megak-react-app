import React, {useState} from 'react';

export const Hooks = (props) => {
    // const [nazwa, setNazwa] = useState(domyślna wartość);
    const [count,setCount] = useState(0);
    setTimeout( () => {
        setCount(5)
    }, 5000);

    return count >= 7 ?
        <p>Poprawne jest to że nasza liczba {count} jest >= 4</p>
        : <h1>{count} jest większe lub równe 4, sprawdź czy mamy rację!</h1>;
}

