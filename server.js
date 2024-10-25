const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())

const teams = {
    'arsenal': {
        'birthName': 'Mikel Arteta Amatriain',
        'age': 42,
        'placeOfBirth': 'San Sebastián, Spain',
        'plTitles': 3,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Mikel_Arteta_2021_%28cropped%29.png'
    },
    'aston villa': {
        'birthName': 'Unai Emery Etxegoien',
        'age': 52,
        'placeOfBirth': 'Hondarribia, Spain',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Unai_Emery_-_Sevilla_%28cropped%29.jpg'
    },
    'brighton': {
        'birthName': 'Fabian Hürzeler',
        'age': 31,
        'placeOfBirth': 'Houston, Texas, United States',
        'plTitles': 0,
        'imgUrl': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5rOWNGPEO9FAwhfDdRuxk8TKnIHDvG2tAT-jZhfxtR9GB07Yq'
    },
    'brentford': {
        'birthName': 'Thomas Frank',
        'age': 51,
        'placeOfBirth': 'Frederiksværk, Denmark',
        'plTitles': 0,
        'imgUrl': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeuipDWFkVun1KE3Odsrh6QjVZuSp3S2b1FEuTuJZUJlkHk6Lv'
    },
    'bournemouth': {
        'birthName': 'Andoni Iraola Sagarna',
        'age': 42,
        'placeOfBirth': 'Usurbil, Spain',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Andoni_Iraola_2023.jpg'
    },
    'chelsea': {
        'birthName': 'Enzo Maresca',
        'age': 44,
        'placeOfBirth': 'Pontecagnano Faiano, Italy',
        'plTitles': 5,
        'imgUrl': 'https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/people/management/2024-25/Enzo_Maresca_profile_2024-25_avatar-removebg'
    },
    'crystal palace': {
        'birthName': 'Oliver Glasner',
        'age': 50,
        'placeOfBirth': 'Schärding, Austria',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/2022128173931_2022-05-08_Fussball_Eintracht_Frankfurt_vs_Borussia_M%C3%B6nchengladbach_-_Sven_-_1D_X_MK_II_-_2395_-_B70I8506_%28cropped%29.jpg'
    },
    'everton': {
        'birthName': 'Sean Mark Dyche[',
        'age': 53,
        'placeOfBirth': 'Kettering, England',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Sean_Dyche.jpg'
    },
    'fulham': {
        'birthName': 'Marco Alexandre Saraiva da Silva',
        'age': 47,
        'placeOfBirth': 'Lisbon, Portugal',
        'plTitles': 0,
        'imgUrl': 'https://southlondon.co.uk/wp-content/uploads/2023/07/silva-2-scaled.jpg.webp'
    },
    'ipswich town': {
        'birthName': 'Kieran McKenna',
        'age': 38,
        'placeOfBirth': 'London, England',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kieran_McKenna_160324.jpg'
    },
    'leicester': {
        'birthName': 'Steven Daniel Cooper',
        'age': 44,
        'placeOfBirth': 'Pontypridd, Wales',
        'plTitles': 1,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Steve_Cooper.jpg'
    },
    'liverpool': {
        'birthName': 'Arend Martijn Slot',
        'age': 46,
        'placeOfBirth': 'Bergentheim, Netherlands',
        'plTitles': 1,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/5/58/Arne_Slot_in_2024.jpg'
    },
    'manchester city': {
        'birthName': 'Josep Guardiola Sala',
        'age': 53,
        'placeOfBirth': 'Santpedor, Spain',
        'plTitles': 9 ,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg'
    },
    'manchester united': {
        'birthName': 'Erik ten Hag',
        'age': 54,
        'placeOfBirth': 'Haaksbergen, Overijssel, Netherlands',
        'plTitles': 13,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Erik_ten_Hag_2017.jpg'
    },
    'newcastle': {
        'birthName': 'Edward John Frank Howe',
        'age': 46,
        'placeOfBirth': 'Amersham, England',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Eddie_Howe_2015.jpg'
    },
    'nottingham forest': {
        'birthName': 'Nuno Herlander Simões Espírito Santo',
        'age': 50,
        'placeOfBirth': 'São Tomé, Portuguese São Tomé and Príncipe',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Nuno_Esp%C3%ADrito_Santo_%28cropped%29.jpg'
    },
    'southampton': {
        'birthName': 'Russell Kenneth Alexander Martin',
        'age': 38,
        'placeOfBirth': 'Brighton, England',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Russell_Martin_2019.jpg'
    },
    'tottenham': {
        'birthName': 'Angelos Postekos',
        'age': 59,
        'placeOfBirth': 'Nea Filadelfeia, Athens, Greece',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Ange_Postecoglou_%28cropped%29.jpg'
    },
    'west ham': {
        'birthName': 'Julen Lopetegui Agote',
        'age': 58,
        'placeOfBirth': 'Asteasu, Spain',
        'plTitles': 0,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Julen_Lopetegui_2017_%28cropped%29.jpg'
    },
    'wolves': {
        'birthName': 'Gary Paul O\'Neil',
        'age': 41,
        'placeOfBirth': 'Beckenham, England',
        'plTitles': 0 ,
        'imgUrl': 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRf1O-ciyHItNtUinRFh5qvLHghEy0lSg3i5lu67JSBbxZNX4vO'
    },
    'unknown': {
        'birthName': 'unknown',
        'age': 0,
        'placeOfBirth': 'unknown',
        'plTitles': 0 ,
        'imgUrl': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1920px-Premier_League_Logo.svg.png'
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
    console.log(`The server is now running on ${PORT}!`)
})