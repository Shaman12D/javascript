const apiKey = '5qyw6HxuS8H2wFPo7zHbwdD7QpA1L3cc'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data})=>{
        const {url} = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
