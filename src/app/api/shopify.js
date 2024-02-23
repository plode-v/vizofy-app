import "@shopify/shopify-api";
import { Axios } from "axios";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";

const shopify = shopifyApi({
    apiKey: "36c8bb54ccdddba4ba2e56b55c696745",
    apiSecretKey: "6d497e29a1c6805eb242e74cd5750cf3",
    scopes: ['read_orders', 'read_products', 'read_analytics']
});


