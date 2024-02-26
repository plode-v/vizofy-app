




// FIXME: TRY THIS CODE WITH EXPRESS BACKEND FIXME:

import axios from 'axios'
import { shopifyApi } from '@shopify/shopify-api'

const shopify = shopifyApi({
    apiKey: "36c8bb54ccdddba4ba2e56b55c696745",
    apiSecretKey: "6d497e29a1c6805eb242e74cd5750cf3",
    scopes: ["read_analytics", "read_orders", "read_products"],
})

axios.get('/api/shopify', async (req, res) => {
    // The library will automatically redirect the user
    try {
        await shopify.auth.begin({
            shop: shopify.utils.sanitizeShop(req.query.shop, true),
            callbackPath: "/auth/shopify/callback",
            isOnline: false,
            rawRequest: req,
            rawResponse: res
        });
    } catch (err) {
        res.status()
    }
});