import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import nauvoo from '../public/images/S02e04nauvoo16m00s.webp';
import rocinante from '../public/images/RociArtS4.webp';
import { ProductType } from '../types/ProductType';
import { usePrimerHook } from '../utils/usePrimerHook';
import { useRouter } from 'next/router';

const IMAGES = {
    nauvoo,
    rocinante,
} as Record<string, StaticImageData>;

interface Props {
    data: ProductType;
}

export const ProductCard: React.FC<Props> = ({ data }) => {
    const router = useRouter();
    usePrimerHook(data, router);

    return (
        <main className={styles.main}>
            <Link href={'/'} passHref>
                <a>Go Back</a>
            </Link>
            <h1 className={styles.title}>{data.title}</h1>
            <Image src={IMAGES[data.itemId]} alt="Picture of Nauvoo" />
            <div className={styles.grid}>
                <div className={styles.card}>
                    <p className={styles.description}>{data.description}</p>
                </div>
                <div className={styles.card} id="checkout-container"></div>
            </div>
        </main>
    );
};
