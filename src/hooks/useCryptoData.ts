import { useState, useEffect } from 'react';
import { Crypto } from '@/types/Crypto';

export const useCryptoData = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((res) => res.json())
      .then((data: Crypto[]) => {
        setCryptos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch crypto data:', error);
        setLoading(false);
      });
  }, []);

  return { cryptos, loading };
};
