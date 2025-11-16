const main = document.querySelector('#main')
const alabiDiv = document.querySelector('#alabiDiv')
const alabiJokeDiv = document.querySelector('#alabiJokeDiv')
alabiDiv.addEventListener('click', async function dadJoke() {
    try {
        const config = { headers: { accept: 'application/json' } }
        const res = await axios.get('http://icanhazdadjoke.com', config)
        const joke = res.data.joke
        alabiJokeDiv.innerHTML = joke
    }
    catch { () => { console.log('NO DADJOKES') } }
},
)