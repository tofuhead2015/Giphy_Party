document.getElementById('giphy').focus()

document.getElementById('delete-all').addEventListener('click', (e)=>{
    document.getElementById('images').innerHTML = ''
    document.getElementById('giphy').focus()
    e.preventDefault()
})

document.getElementById('giphy-form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const giphy = document.getElementById('giphy')
    const giphy_val = giphy.value
    console.log(giphy_val)
    getGiphy(giphy_val)
    giphy.value = ''
    document.getElementById('giphy').focus()
})

async function getGiphy(giphy){
    try{
        const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q:giphy, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
        if (response.data.data.length)
            addImage(response.data.data[0].images.downsized.url)
        else {
            alert("Nothing was found!")
        }
    } catch (e){
        alert("Nothing was found!")
    }    
}

function addImage(url){
    const img_container = document.getElementById('images')
    const img = document.createElement('img')
    img.src = url
    img_container.append(img)
}
