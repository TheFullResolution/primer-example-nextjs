// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductType } from '../../types/ProductType';

const API_KEY = process.env.NEXT_PUBLIC_PRIMER_API_KEY!; // YOUR API KEY
const PRIMER_API_URL = 'https://api.sandbox.primer.io';

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const url = `${PRIMER_API_URL}/client-session`;
    const { products } = req.query as Partial<{ products: ProductType[] }>;


    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Version': '2021-10-19',
            'X-Api-Key': API_KEY,
        },
        body: JSON.stringify({
            orderId: 'order-' + Math.random(),
            currencyCode: 'EUR',
            order: {
                lineItems: products,
            },
        }),
    }).then((data) => data.json());

    return res.send(response);
}
