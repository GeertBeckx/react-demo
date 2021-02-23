import React from 'react';
import PaymentMethodList from './Payments/PaymentMethodList';

export default class Overview extends React.Component {

    state = {
        Nonce: '',
        PaymentAmount: 123.00,
        PaymentDescription: 'blabla',
        PaymentMethod: '',
        MessageIsVisible: false,
        MessageStatus: '',
        MessageText: ''
    }

    // componentDidMount() {
    //     axios.get(`http://local.concordia.be/nl-be/api/overview/${this.state.Nonce}`)
    //         .then(res => {
    //             const overview = res.data;
    //             this.setState({ 
    //                 PaymentAmount: overview.Amount,
    //                 PaymentDescription: overview.Description
    //             });
    //         })
    // }

    handleChange = event => {
        this.setState({ 
            PaymentMethod: event.target.value, 
            MessageText: '' 
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const paymentRequest = this.state;
        
        console.log(paymentRequest);

        // axios.post(`http://local.concordia.be/nl-be/api/payment/create`, { paymentRequest })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })

        this.setState({
            MessageIsVisible: true,
            MessageStatus: 'success',
            MessageText: 'De betaling van  uw premie werd geregistreerd. Een beveiligingsmail ... '
        });
    }

    render() {
        let message;
        
        if(this.state.MessageIsVisible) {
            message = <div className={`payment-overview-message-${this.state.MessageStatus}`}><p>{this.state.MessageText}</p></div>;
        } else {
            message = null;
        }

        return (
            <div>
                <h1>Payment Overview</h1>
                
                <div className="payment-overview-detail">
                    <p>De te betalen premie bedraagt:</p>
                    <p>{Number.parseFloat(this.state.PaymentAmount).toFixed(2)}</p>
                </div>
                
                <div className="payment-overview-methods">
                    <form onSubmit={this.handleSubmit}>
                        <PaymentMethodList name="Mollie" onChange={this.handleChange} />
                        <button type="submit">Bestel</button>
                    </form>
                </div>
                
                { message }
                
            </div>
        );
    }
}