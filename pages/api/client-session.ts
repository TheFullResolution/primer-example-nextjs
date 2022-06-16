// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductType } from '../../types/ProductType';

const API_KEY = process.env.NEXT_PUBLIC_PRIMER_API_KEY!; // YOUR API KEY
const PRIMER_API_URL = 'https://api.sandbox.primer.io';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = `${PRIMER_API_URL}/client-session`;
    const { title, ...rest } = req.body as ProductType;
    const item = rest;
    let results: Response;

    try {
        results = await fetch(url, {
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
                    lineItems: [item],
                },
            }),
        });
    } catch (e: any) {
        return res.status(500).json(e);
    }

    if (!results.ok) {
        console.log(results);

        res.status(results.status).send(results.statusText);
    } else {
        const response = await results.json();
        return res.status(200).send(response);
    }
}
