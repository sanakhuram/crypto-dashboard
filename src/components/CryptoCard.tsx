import Image from 'next/image';
import Link from 'next/link';

type Crypto = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
};

export function CryptoCard({ crypto }: { crypto: Crypto }) {
  return (
    <Link href={`/coin/${crypto.id}`}>
      <div className="border border-teal-900 rounded-lg shadow-lg p-4 hover:shadow-xl shadow-teal-600 transition space-y-2">
        <div className="flex items-center gap-4">
          <Image
            src={crypto.image}
            alt={crypto.name}
            width={40}
            height={40}
            className="rounded-full"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />

          <h2 className="text-lg font-semibold">{crypto.name}</h2>
        </div>

        <p>💰 Price: ${crypto.current_price.toLocaleString()}</p>
        <p>📊 Market Cap: ${crypto.market_cap.toLocaleString()}</p>
        <p className={crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>
          24h: {crypto.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </Link>
  );
}
