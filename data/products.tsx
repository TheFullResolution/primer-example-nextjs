import { ProductType } from '../types/ProductType';

export const products: ProductType[] = [
    {
        itemId: 'rocinante',
        title: 'Rocinante',
        description: 'The Rocinante ("Roci") is a former MCRN (Martian Congressional Republic Navy)-turned-independent Corvette-class frigate capable of multiple combat roles, including acting as a torpedo bomber and marine insertion vessel. Originally commissioned as the MCRN Tachi  (ECF-270), the ship was stationed aboard the flagship of the Martian navy, the MCRN Donnager. It was renamed by James Holden after he and his crew escaped the Donnager aboard the ship, marking the start of its long and decorated career as an independent warship.',
        amount: 10000000, // Amount should be in minor units!
        quantity: 1,
    },
    {
        itemId: 'nauvoo',
        title: 'Nauvoo / Behemoth / Medina Station',
        description: 'The LDSS Nauvoo, later known as OPAS Behemoth and then Medina Station, is a generation ship constructed at Tycho Station. Cylindrical in shape, it measured just over two kilometers long and half a kilometer wide. Four Donnager-class battleships would fit in her belly and not touch the walls.',
        amount: 1000000000, // Amount should be in minor units!
        quantity: 1,
    },
]
