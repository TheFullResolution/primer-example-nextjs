import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import { ProductType } from '../../types/ProductType';
import { products } from '../../data/products';
import { useRouter } from 'next/router';
import nauvoo from '../../public/images/S02e04nauvoo16m00s.webp';
import rocinante from '../../public/images/RociArtS4.webp';
import Image, { StaticImageData } from 'next/image';

const IMAGES = {
    nauvoo, rocinante
} as Record<string, StaticImageData>

interface Props {
    data: ProductType;
}

const Product: NextPage<Props> = ({ data }) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <main className={styles.main}>
                <h1 className={styles.title}>LOADING</h1>
            </main>
        );
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>{data.title}</h1>
                <Image src={IMAGES[data.itemId]} alt="Picture of Nauvoo" />
                <p className={styles.description}>{data.description}</p>
            </main>
        </div>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
    if (!params?.product) {
        return {
            notFound: true,
        };
    }

    const product = products.find((el) => el.itemId === params.product);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data: product },
    };
};

export default Product;
