require('dotenv').config();
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const stripe = require("stripe")(process.env.CLE_PRIVE)

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/checkout-session", async (req, res) =>
{
    const { montant, number } = req.body;
    const total = montant * 100
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://test.lesbonplan.fr:3000/success',
        cancel_url: 'http://test.lesbonplan.fr:3000/faile',
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: `nombre de produit : ${number}`
                    },
                    unit_amount: total
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
    });
    res.send(session);
});

app.get('/', (req, res) => res.send())

app.listen(process.env.PORT || 80, () => console.log("serveur on port :", process.env.PORT || 80));