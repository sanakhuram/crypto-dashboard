// src/app/top-coins/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Crypto } from '@/types/Crypto';

async function getTopCoins(): Promise<Crypto[]> {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
  );
  if (!res.ok) throw new Error('Failed to fetch top coins');
  return res.json();
}

export default async function TopCoinsPage() {
  const coins = await getTopCoins();

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center p-6">Top 10 Cryptocurrencies</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <li
            key={coin.id}
            className="border p-6 rounded-2xl hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <Link href={`/coin/${coin.id}`} className="flex flex-col items-center gap-4">
              <Image
                src={coin.image}
                alt={coin.name}
                width={64}
                height={64}
                style={{ height: 'auto' }}
                className="object-contain rounded-full"
                priority
              />
              <div className="space-y-2">
                <h2 className="font-bold text-lg">
                  {coin.name} ({coin.symbol?.toUpperCase()})
                </h2>
                <p className="text-green-600 font-semibold">
                  💰 ${coin.current_price.toLocaleString()}
                </p>
                <p className="text-gray-500">🏦 Market Cap: ${coin.market_cap.toLocaleString()}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
