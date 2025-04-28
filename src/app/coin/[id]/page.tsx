import { Metadata } from 'next';
import Image from 'next/image';
import Chart from '@/components/Chart';

async function resolveParams(paramsPromise: Promise<{ id: string }>) {
  return await paramsPromise;
}

async function getCoin(id: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  if (!res.ok) throw new Error('Failed to fetch coin data');
  return res.json();
}

async function getCoinChart(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  if (!res.ok) throw new Error('Failed to fetch coin chart data');
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await resolveParams(params);
  const coin = await getCoin(id);

  return {
    title: `${coin.name} - Crypto Dashboard`,
    description: coin.description?.en?.slice(0, 150) || 'Crypto price information',
  };
}

export default async function CoinPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await resolveParams(params);

  const [coin, chartData] = await Promise.all([getCoin(id), getCoinChart(id)]);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-6">
        <Image
          src={coin.image.large}
          alt={coin.name}
          width={80}
          height={80}
          style={{ height: 'auto' }}
          className="rounded-full"
          priority
        />
        <h1 className="text-4xl font-bold">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">7-Day Price Chart</h2>
          {chartData.prices ? <Chart data={chartData.prices} /> : <p>No chart data available.</p>}
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About {coin.name}</h2>
            <p>{coin.description?.en?.slice(0, 500) || 'Description not available.'}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="border border-teal-600 p-4 rounded-lg">
              <p className="text-teal-500">Current Price</p>
              <p className="text-lg font-semibold">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>
            <div className=" border border-teal-600 p-4 rounded-lg">
              <p className="text-teal-500">Market Cap Rank</p>
              <p className="text-lg font-semibold">{coin.market_cap_rank}</p>
            </div>
            <div className="border border-teal-600 p-4 rounded-lg">
              <p className="text-teal-500">24h Change</p>
              <p className="text-lg font-semibold">
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
            <div className="border border-teal-600 p-4 rounded-lg">
              <p className="text-teal-500">Circulating Supply</p>
              <p className="text-lg font-semibold">
                {coin.market_data.circulating_supply.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Official Website */}
          <div>
            <a
              href={coin.links?.homepage?.[0] ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-teal-600 underline font-semibold mt-4"
            >
              Visit Official Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
