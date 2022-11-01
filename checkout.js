import { loadStripe } from '@stripe/stripe-js';

export async function checkout({ lineItems }) {
	let stripePromise = null;

	const getStripe = () => {
		if (!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
		}
		return stripePromise;
	};

	const stripe = await getStripe();

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin,
	});

	const paymentIntent = await stripe.paymentIntents.create({
		// Make sure the total amount fits within Afterpay transaction amount limits:
		// https://stripe.com/docs/payments/afterpay-clearpay#collection-schedule
		amount: 1000,
		currency: 'gbp',
		payment_method_types: ['afterpay_clearpay'],
		shipping: {
			name: 'Jenny Rosen',
			address: {
				line1: '1234 Main Street',
				city: 'San Francisco',
				state: 'CA',
				country: 'US',
				postal_code: '94111',
			},
		},
	});
}
