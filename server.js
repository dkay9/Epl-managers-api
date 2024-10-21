const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())

const teams = {
    'arsenal': {
        'managerName': 'Mikel Arteta Amatriain',
        'age': 42,
        'placeOfBirth': 'San Sebastián, Spain',
        'plTitles': 3
    },
    'aston vila': {
        'managerName': 'Unai Emery Etxegoien',
        'age': 52,
        'placeOfBirth': 'Hondarribia, Spain',
        'plTitles': 0
    },
    'brighton': {
        'managerName': 'Fabian Hürzeler',
        'age': 31,
        'placeOfBirth': 'Houston, Texas, United States',
        'plTitles': 0
    },
    'brentford': {
        'managerName': 'Thomas Frank',
        'age': 51,
        'placeOfBirth': 'Frederiksværk, Denmark',
        'plTitles': 0
    },
    'bournemouth': {
        'managerName': 'Andoni Iraola Sagarna',
        'age': 42,
        'placeOfBirth': 'Usurbil, Spain',
        'plTitles': 0
    },
    'chelsea': {
        'managerName': 'Enzo Maresca',
        'age': 44,
        'placeOfBirth': 'Pontecagnano Faiano, Italy',
        'plTitles': 5
    },
    'crystal palace': {
        'managerName': 'Oliver Glasner',
        'age': 50,
        'placeOfBirth': 'Schärding, Austria',
        'plTitles': 0
    },
    'everton': {
        'managerName': 'Sean Mark Dyche[',
        'age': 53,
        'placeOfBirth': 'Kettering, England',
        'titlesWon': 0
    },
    'fulham': {
        'managerName': 'Marco Alexandre Saraiva da Silva',
        'age': 47,
        'placeOfBirth': 'Lisbon, Portugal',
        'titlesWon': 0
    },
    'ipswich town': {
        'managerName': 'Kieran McKenna',
        'age': 38,
        'placeOfBirth': 'London, England',
        'titlesWon': 0
    },
    'leicester': {
        'managerName': 'Steven Daniel Cooper',
        'age': 44,
        'placeOfBirth': 'Pontypridd, Wales',
        'titlesWon': 1
    },
    'liverpool': {
        'managerName': 'Arend Martijn Slot',
        'age': 46,
        'placeOfBirth': 'Bergentheim, Netherlands',
        'titlesWon': 1
    },
    'manchester city': {
        'managerName': 'Josep Guardiola Sala',
        'age': 53,
        'placeOfBirth': 'Santpedor, Spain',
        'titlesWon': 9 
    },
    'manchester united': {
        'managerName': 'Erik ten Hag',
        'age': 54,
        'placeOfBirth': 'Haaksbergen, Overijssel, Netherlands',
        'titlesWon': 13
    },
    'newcastle': {
        'managerName': 'Edward John Frank Howe',
        'age': 46,
        'placeOfBirth': 'Amersham, England',
        'titlesWon': 0
    },
    'nottingham forest': {
        'managerName': 'Nuno Herlander Simões Espírito Santo',
        'age': 50,
        'placeOfBirth': 'São Tomé, Portuguese São Tomé and Príncipe',
        'titlesWon': 0
    },
    'southampton': {
        'managerName': 'Russell Kenneth Alexander Martin',
        'age': 38,
        'placeOfBirth': 'Brighton, England',
        'titlesWon': 0
    },
    'tottenham': {
        'managerName': 'Angelos Postekos',
        'age': 59,
        'placeOfBirth': 'Nea Filadelfeia, Athens, Greece',
        'titlesWon': 0
    },
    'west ham': {
        'managerName': 'Julen Lopetegui Agote',
        'age': 58,
        'placeOfBirth': 'Asteasu, Spain',
        'titlesWon': 0
    },
    'wolves': {
        'managerName': 'Gary Paul O\'Neil',
        'age': 41,
        'placeOfBirth': 'Beckenham, England',
        'titlesWon': 0 
    },
    'unknown': {
        'managerName': 'unknown',
        'age': 0,
        'placeOfBirth': 'unknown',
        'titlesWon': 0 
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (req, res) => {
    const managerName = req.params.name.toLowerCase()
    if(teams[managerName]){
        res.json(teams[managerName])
    }else{
        res.json(teams['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now runiing on ${PORT}!`)
})