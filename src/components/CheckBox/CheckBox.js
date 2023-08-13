import React, {useState} from "react";

export const CheckBox = props => {
    const [agreementChecked, setAgreementChecked] = useState(false);

    const sendForm = e => {
        e.preventDefault();
        console.log('checkbox checked:', agreementChecked);
    };

    return <form onSubmit={sendForm}>
        <label>
            <input
                type="checkbox"
                checked={agreementChecked}
                onChange={e => setAgreementChecked(e.target.checked)}
            /> I consent :)
        </label>
        <p>
            {!agreementChecked && 'THIS AGREEMENT IS REQUIRED ;) PLEASE MARK IT..'}
        </p>
        <p>
            {agreementChecked ? 'You will recieve somthing from us.' : 'We will not send you our gift.'}
        </p>
    </form>
};




