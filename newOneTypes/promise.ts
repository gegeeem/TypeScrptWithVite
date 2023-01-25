interface Men {
  id: number;
  name: string;
}

const getNameOFMen = (m: Men) => {
  return m.name;
};
const ich: Men = {
  id: 1,
  name: "Me",
};
console.log(getNameOFMen(ich));
const getDAta = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
};
getDAta().then((res) => {
  console.log(res);
});
interface ConversionData {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info?: {
    timestamp: string;
    rate: number;
  };
  date: string;
  result: number;
}
function getConvertedData(): Promise<ConversionData> {
  return fetch(
    "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
        "x-rapidapi-key": "your_api_key",
      },
    }
  )
    .then((response) => response.json()) // Parse the response in JSON
    .then((response) => {
      return response as ConversionData; // Cast the response type to our interface
    });
}
getConvertedData().then((res) => {
  console.log(res);
});
//finaly the best solution change type:"module" in type:"commonjs"
//----> remove-> type: "module" from package.json to enable Promise or other solution rename file .js to .cjs and node .cjs
// {
//   "name": "newonetypes",
//   "private": true,
//   "version": "0.0.0",
//   "scripts": {
//     "dev": "vite",
//     "build": "tsc && vite build",
//     "preview": "vite preview"
//   },
//   "devDependencies": {
//     "typescript": "^4.9.3",
//     "vite": "^4.0.0"
//   }
// }

export {};
