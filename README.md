This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# cnft-basket
A way to create "baskets" of compressed NFT's for ease of trade, transfer and storage. 

## Abstract
In a tweet [here](https://twitter.com/0xMetaLight/status/1688198505599246337?s=20) I outlined my thoughts on what I see as beneficial tooling for the rapidly expanding compressed NFT ecosystem on Solana. cNFT's revolutionized the collectibles ecosystem on Solana, making NFT mints exponsionally less expensive and allowing for significantly higher collection sizes. While this helped Solana make waves in NFT markets and user onboarding, marketplaces have been flooded with millions of cNFT's, driving prices to a point where, in most collections, a floor price compressed NFT is less than the gas required to purchase it from the marketplace. 

To address this issue, cNFT Basket creates a pNFT, sends an input of 10-1000 cNFT's to the pNFT, and gives ownership of the "Basket" to the pNFT creator, allowing NFT traders to easily trade batches of thier favorite cNFT collections. 

## Examples
- 10 Tensorian Shards (Amount needed to mint 1 Tensorian)
- 100 Dialect Stickers (floor priced stickers from the same pack)
- 1000 Drip Haus S2 commons (cost effective trading) 
