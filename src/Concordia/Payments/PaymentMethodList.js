import React from 'react';
import axios from 'axios';

import API from '../Api';

export default class PaymentMethodList extends React.Component {
    
    state = {
        paymentMethods: []
    }

    async componentDidMount() {
        const paymentMethodResponse = await API.get(`/nl-be/api/paymentmethod`);
        const paymentMethodData = paymentMethodResponse.data;

        this.setState({ paymentMethods: paymentMethodData.Items });

        // API.get(`/nl-be/api/paymentmethod`)
        //     .then(res => {
        //         const paymentMethods = res.data;
        //         this.setState({ paymentMethods: paymentMethods.Items });
        //     });
    }

    handleChange = event => {
        this.props.onChange(event);
    }

    render() {
        return (
            <div className="payment-method-list">
                <ul>
                    { this.state.paymentMethods.map(m => 
                        <li key={m.Id} onChange={this.handleChange}>
                            <img src={m.Image.Size2x} alt={m.Description} />
                            <input type="radio" value={m.Id} name="MyPaymentMethod" />
                            {m.Description}
                        </li>
                    )}
                </ul>
            </div> 
        )
    }
}