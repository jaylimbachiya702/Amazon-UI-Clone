const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LQ2tPSAwHMYFRRFxX5zObeZDZaoDlg2e1Sxi3KU7kPd1DqOMe7kPtgQdwPLWcXTNdO0knxCS6bV7krOJJiwmjCt00lNEDJ50g')

// API

// - App config
const app = express();

// - MIddlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
const total = request.query.total;

console.log('Payment Request Received for this amount>>>', total);
const paymentIntent = await stripe.paymentIntents.create({
amount: total,
currency: "inr",
});
response.status(201).send({
    clientSecret : paymentIntent.client_secret,
})
})

// - Listen Command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-3b1c5/us-central1/api
