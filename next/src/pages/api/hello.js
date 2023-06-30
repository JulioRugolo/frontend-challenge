// /pages/api/api.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching data from API');
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
