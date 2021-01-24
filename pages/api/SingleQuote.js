import fs from 'fs'
import path from 'path'

export default async function getSingleQuote(req, res) {
    const dataFromFile = await checkLocalFile();
    //console.log('dataFromFile is ',dataFromFile)
    if (dataFromFile.masterlist === null || dataFromFile.masterlist.length === 0) {
        
        const returnedQuote = await getRandomQuote()
        //console.log('returnedQuote', returnedQuote)

        
        res.status(200).json({ quote: returnedQuote })
    } else {
        res.status(200).json({ quote: dataFromFile.masterlist[0]})
        dataFromFile.masterlist.shift()
        writeToJSONFile(dataFromFile)
    }
}

async function getRandomQuote() {
   //console.log('HEREEEEEEEEE')
    const response = await fetch('https://type.fit/api/quotes')

    if (response.ok) {
        const data = await response.json()
       // console.log('data is', data)
        let randomNumber = Math.floor(Math.random() * data.length)
        const randomQuote = data[randomNumber]
        randomQuote.date = new Date().toUTCString()
        //console.log('randomquote is', randomQuote)
        return randomQuote
    }
}

async function writeToJSONFile(quoteContents) {
    try{
        const filePath = path.join(process.cwd(), 'public/quoteQueue.json')

        fs.writeFileSync( filePath, JSON.stringify(quoteContents), "utf8")
        console.log('Success')
    }catch(error){
       console.log(error)
    }
}

async function checkLocalFile() {

    const jsonFileDirectory = path.join(process.cwd(), 'public/quoteQueue.json')
    const jsonFileContents = fs.readFileSync(jsonFileDirectory)

    const data = JSON.parse(jsonFileContents)
    //console.log('data is', data)
    return data
}