import fs from 'fs'
import path from 'path'
export default async function writeQuote(req, res) {
    
    try{
        const filePath = path.join(process.cwd(), 'public/quoteQueue.json')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        let result = JSON.parse(fileContents)
        let newObj = req.body
        newObj.date = new Date().toUTCString()
        result.masterlist.push(newObj);
        let b = fs.writeFileSync( filePath, JSON.stringify(result), "utf8")
        res.status(200).json({ message:"Thank You for paying it forward!!" })

    }catch(error){
        res.status(400).json({
            errors: [{ message: `An Error Occured when writing data: ${error}` }],
        })
    }

}