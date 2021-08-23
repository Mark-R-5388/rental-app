const listingContainer = selectElement('.list-container')
const cityName = selectElement('#city')
const stateName = selectElement('#state')
const limitAmount = selectElement('#limit')
const searchButton = selectElement('#search-button')

console.log(process.env.API_HOST)

// On Search Submit
searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  listingContainer.innerHTML = ''
  let [city, state, limit] = [
    cityName.value,
    stateName.value,
    limitAmount.value,
  ]
  let inputArray = [city, state, limit]
  console.log(inputArray)
  // render(inputArray)
})

// render items
function render(cityName, stateName, limitAmount) {
  fetch(
    `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${cityName}&state_code=${stateName}&offset=0&limit=${limitAmount}&sort=relevance`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.API_HOST,
        'x-rapidapi-key': process.env.API_KEY,
      },
    }
  )
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.error(err)
    })
}

// Create Element
function makeElement(element, className) {
  const newElement = document.createElement(element)
  newElement.classList.add(className)
  return newElement
}

// Select Element
function selectElement(element) {
  return document.querySelector(element)
}
