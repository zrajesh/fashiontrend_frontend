import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_live_51GzydPIIIBrJpbyHRBb01XEU0rrybwi5fCz7UkW4rOhOk9w5Y52LiQRc47kFGW0H3NFTYNe8NZ2kNLEbPehM2IMG00Y1l4eYyE";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
         label="Pay Now"
         name="Fashion Hub Ltd."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/UJp.svg"
         description={`Your total price with discount is $ ${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
