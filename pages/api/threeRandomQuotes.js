export default async function getRandomQuote(req, res) {

    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end();
    }

    const response = await fetch('https://type.fit/api/quotes')

    if (response.ok) {
        const data = await response.json()

        let arr = [];
        while(arr.length < 3){
            var r = Math.floor(Math.random() * data.length) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        res.status(200).json({ quote0: data[arr[0]], quote1: data[arr[1]], quote2: data[arr[2]] })
    }else {
        const data = await response.json()
        res.status(400).json({
        errors: [{ message: `Fetch to the API failed with code: ${data}` }],
        })
    }
}