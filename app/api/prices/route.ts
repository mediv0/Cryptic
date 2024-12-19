import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://coinmarketcap.com/all/views/all/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const data = [];

    // Iterate through each table row with the class `cmc-table-row`
    $("tr.cmc-table-row").each((index, element) => {
      // Extract the name
      const name = $(element)
        .find("td:nth-child(2) .cmc-table__column-name--name")
        .text()
        .trim();


      // Extract the symbol
      const symbol = $(element)
        .find("td:nth-child(3) div")
        .text()
        .trim();

      // Extract the price
      const price = $(element)
        .find("td:nth-child(5) .sc-b3fc6b7-0 span")
        .text()
        .trim();

      // Extract the market cap
      const marketCap = $(element)
        .find("td:nth-child(4) .sc-11478e5d-0")
        .text()
        .trim();

      // Extract 1-hour change
      const percentChange1h = $(element)
        .find("td:nth-child(8) div")
        .text()
        .trim();

      // Extract 24-hour change
      const percentChange24h = $(element)
        .find("td:nth-child(9) div")
        .text()
        .trim();

      // Extract 7-day change
      const percentChange7d = $(element)
        .find("td:nth-child(10) div")
        .text()
        .trim();

      // Extract icon link URL
      if (name && symbol && price) {
        data.push({
          name,
          symbol,
          price,
          marketCap,
          percentChange1h,
          percentChange24h,
          percentChange7d,
          icon: `https://s2.coinmarketcap.com/static/img/coins/32x32/1${index}.png` 
        });
      }
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
