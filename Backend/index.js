const express = require("express");
const moralis = require('moralis').default;
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());

app.get('/tokenprice', async (req, res) => {
    try {
        const usdPrices = { exampleToken: 123 };
        return res.status(200).json(usdPrices);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch token prices" });
    }
});

moralis.start({
    apiKey: process.env.MORALIS_KEY
}).then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})

