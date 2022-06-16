import { Primer } from '@primer-io/checkout-web';
import { ProductType } from '../types/ProductType';
import { NextRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function usePrimerHook(product: ProductType, router: NextRouter) {
    useIsomorphicLayoutEffect(() => {
        const body = JSON.stringify(product);

        const navigateToSuccess = () => {
            router.push('/buy/success');
        };

        async function onLoaded() {
            const results = await fetch('/api/client-session', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            if (!results.ok) {
                throw new Error(`method failed, ${results.statusText}`);
            }

            const clientSession = await results.json();

            const { clientToken } = clientSession;

            await Primer.showUniversalCheckout(clientToken, {
                container: '#checkout-container',
                onCheckoutComplete({ payment }) {
                    navigateToSuccess();
                },

                style: {
                    submitButton: {
                        base: {
                            color: '#ffffff',
                            background: '#000000',
                            borderRadius: '8px',
                            boxShadow: 'none',
                        },
                        disabled: {
                            color: '#9b9b9b',
                            background: '#e1deda',
                        },
                    },
                },
            });
        }

        if (typeof window !== 'undefined') {
            onLoaded().catch((er) => {
                console.log(er);
            });
        }
    }, []);
}
