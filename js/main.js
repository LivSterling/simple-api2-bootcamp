//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.getElementById("ingredients").value
  const allergens = document.getElementById("allergens").value
  const diet = document.getElementById("diet").value
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e01fe80a042040f5bb1eea475ef0ef61&includeIngredients=${choice}&addRecipeInformation=true&intolerances=${allergens}&diet=${diet}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('title0').innerHTML = data.results[0].title
        document.getElementById('src0').innerHTML = `By: ${data.results[0].sourceName}`
        document.getElementById('img0').src = data.results[0].image
        document.getElementById('p0').innerHTML = data.results[0].summary
        document.getElementById('linkOne0').href = data.results[0].sourceUrl
        document.getElementById('linkTwo0').href = data.results[0].sourceUrl
        
        document.getElementById('title1').innerHTML = data.results[1].title
        document.getElementById('src1').innerHTML = `By: ${data.results[1].sourceName}`
        document.getElementById('img1').src = data.results[1].image
        document.getElementById('p1').innerHTML = data.results[1].summary
        document.getElementById('linkOne1').href = data.results[1].sourceUrl
        document.getElementById('linkTwo1').href = data.results[1].sourceUrl

        document.getElementById('title2').innerHTML = data.results[2].title
        document.getElementById('src2').innerHTML = `By: ${data.results[2].sourceName}`
        document.getElementById('img2').src = data.results[2].image
        document.getElementById('p2').innerHTML = data.results[2].summary
        document.getElementById('linkOne2').href = data.results[2].sourceUrl
        document.getElementById('linkTwo2').href = data.results[2].sourceUrl

        document.getElementById('title3').innerHTML = data.results[3].title
        document.getElementById('src3').innerHTML = `By: ${data.results[3].sourceName}`
        document.getElementById('img3').src = data.results[3].image
        document.getElementById('p3').innerHTML = data.results[3].summary
        document.getElementById('linkOne3').href = data.results[3].sourceUrl
        document.getElementById('linkTwo3').href = data.results[3].sourceUrl

        document.getElementById('title4').innerHTML = data.results[4].title
        document.getElementById('src4').innerHTML = `By: ${data.results[4].sourceName}`
        document.getElementById('img4').src = data.results[4].image
        document.getElementById('p4').innerHTML = data.results[4].summary
        document.getElementById('linkOne4').href = data.results[4].sourceUrl
        document.getElementById('linkTwo4').href = data.results[4].sourceUrl

        document.getElementById('title5').innerHTML = data.results[5].title
        document.getElementById('src5').innerHTML = `By: ${data.results[5].sourceName}`
        document.getElementById('img5').src = data.results[5].image
        document.getElementById('p5').innerHTML = data.results[5].summary
        document.getElementById('linkOne5').href = data.results[5].sourceUrl
        document.getElementById('linkTwo5').href = data.results[5].sourceUrl

        document.getElementById('title6').innerHTML = data.results[6].title
        document.getElementById('src6').innerHTML = `By: ${data.results[6].sourceName}`
        document.getElementById('img6').src = data.results[6].image
        document.getElementById('p6').innerHTML = data.results[6].summary
        document.getElementById('linkOne6').href = data.results[6].sourceUrl
        document.getElementById('linkTwo6').href = data.results[6].sourceUrl

        document.getElementById('title7').innerHTML = data.results[7].title
        document.getElementById('src7').innerHTML = `By: ${data.results[7].sourceName}`
        document.getElementById('img7').src = data.results[7].image
        document.getElementById('p7').innerHTML = data.results[7].summary
        document.getElementById('linkOne7').href = data.results[7].sourceUrl
        document.getElementById('linkTwo7').href = data.results[7].sourceUrl

        document.getElementById('title8').innerHTML = data.results[8].title
        document.getElementById('src8').innerHTML = `By: ${data.results[8].sourceName}`
        document.getElementById('img8').src = data.results[8].image
        document.getElementById('p8').innerHTML = data.results[8].summary
        document.getElementById('linkOne8').href = data.results[8].sourceUrl
        document.getElementById('linkTwo8').href = data.results[8].sourceUrl

        document.getElementById('title9').innerHTML = data.results[9].title
        document.getElementById('src9').innerHTML = `By: ${data.results[9].sourceName}`
        document.getElementById('img9').src = data.results[9].image
        document.getElementById('p9').innerHTML = data.results[9].summary
        document.getElementById('linkOne9').href = data.results[9].sourceUrl
        document.getElementById('linkTwo9').href = data.results[9].sourceUrl


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

