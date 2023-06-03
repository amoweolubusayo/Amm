import React, { useState } from "react";

interface Pool {
  id: number;
  tokens: string;
  reserves: string;
  fees: number;
  liquidity: number;
  providers: number;
}

const LiquidityPoolExplorerPage: React.FC = () => {
  const [pools, setPools] = useState<Pool[]>([
    {
      id: 1,
      tokens: "Token A / Token B",
      reserves: "1000 / 2000",
      fees: 0.03,
      liquidity: 5000,
      providers: 10,
    },
    {
      id: 2,
      tokens: "Token C / Token D",
      reserves: "500 / 1000",
      fees: 0.02,
      liquidity: 3000,
      providers: 5,
    },
    // Add more pools here
  ]);
  const [sortBy, setSortBy] = useState("liquidity"); // Default sort by liquidity
  const [filterBy, setFilterBy] = useState(""); // Default no filter

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterBy(event.target.value);
  };

  const filteredPools = pools.filter((pool) =>
    pool.tokens.toLowerCase().includes(filterBy.toLowerCase())
  );

  const sortedPools = filteredPools.sort((a, b) => {
    if (sortBy === "liquidity") {
      return b.liquidity - a.liquidity;
    } else if (sortBy === "fees") {
      return b.fees - a.fees;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Liquidity Pool Explorer</h1>

      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="p-2 border rounded"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="liquidity">Liquidity</option>
          <option value="fees">Fees</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">
          Filter By Token:
        </label>
        <input
          type="text"
          id="filter"
          className="p-2 border rounded"
          value={filterBy}
          onChange={handleFilterChange}
        />
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 font-bold text-left">Tokens</th>
            <th className="p-4 font-bold text-left">Reserves</th>
            <th className="p-4 font-bold text-left">Fees</th>
            <th className="p-4 font-bold text-left">Liquidity</th>
            <th className="p-4 font-bold text-left">Liquidity Providers</th>
          </tr>
        </thead>
        <tbody>
          {sortedPools.map((pool) => (
            <tr key={pool.id} className="border-b">
              <td className="p-4">{pool.tokens}</td>
              <td className="p-4">{pool.reserves}</td>
              <td className="p-4">{pool.fees}</td>
              <td className="p-4">{pool.liquidity}</td>
              <td className="p-4">{pool.providers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiquidityPoolExplorerPage;
