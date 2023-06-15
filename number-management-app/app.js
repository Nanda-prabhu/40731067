const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/numbers', async (req, res) => {

  const urls = req.query.url;
  const result = await fetchNumbers(urls);
  const uniqueNumbers = [...new Set(result)].sort((a, b) => a - b);

  res.json({ numbers: uniqueNumbers });
});

app.get('/numbers/odd', async (req, res) => {
  const urls = req.query.url;
  const result = await fetchNumbers(urls, 'odd');

  const uniqueOddNumbers = [...new Set(result)].filter(number => number % 2 !== 0).sort((a, b) => a - b);

  res.json({ numbers: uniqueOddNumbers });
});

app.get('/numbers/even', async (req, res) => {
  const urls = req.query.url;
  const result = await fetchNumbers(urls, 'even');
  const uniqueEvenNumbers = [...new Set(result)].filter(number => number % 2 === 0).sort((a, b) => a - b);

  res.json({ numbers: uniqueEvenNumbers });

});

app.get('/numbers/fibonacci', async (req, res) => {
  const urls = req.query.url;

  const result = await fetchNumbers(urls, 'fibonacci');
  const uniqueFibonacciNumbers = [...new Set(result)].filter(isFibonacci).sort((a, b) => a - b);
  
  res.json({ numbers: uniqueFibonacciNumbers });
});

async function fetchNumbers(urls, type = '') {
  const result = [];

  try {
    const requests = urls.map(url => axios.get(url, { timeout: 500 }));
    const responses = await Promise.allSettled(requests);

    responses.forEach(response => {
      if (response.status === 'fulfilled') {
        const data = response.value.data;
        if (data.numbers) {
          result.push(...data.numbers);
        }
      }
    });
  } catch (error) {
    console.error(error);
  }

  return result;
}

function isFibonacci(number) {
  let a = 0;
  let b = 1;

  while (b < number) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === number;
}

app.listen(8008, () => {
  console.log('server running on port 8008');
});
