

const searchBtn = document.getElementsByClassName("search-btn")[0]
const infoCtn = document.getElementsByClassName("info-ctn")[0]
const left = document.getElementsByClassName("left")[0]
const right = document.getElementsByClassName("right")[0]
const img_icon= document.getElementsByClassName("card_icon")[0]
const tempHeading = document.getElementsByClassName("temp")[0]
const conditionHeading = document.getElementsByClassName("condition")[0]
const cityHeading = document.getElementsByClassName("city")[0]



function getValue(){

    left.removeChild(document.getElementsByClassName("card_icon")[0])



    const inputField = document.getElementsByClassName("ip")[0]
    const cityName = (inputField.value)
    const baseUrl = "http://api.weatherapi.com/v1/"
    const apiKey = "581b9979b5a84c9f937120822242005"

    const api = baseUrl+"current.json?key="+apiKey+"&q="+cityName

    const apiRequestData = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Header":"*"
          },
    }
    const res = fetch(api,apiRequestData)
    res.then(res => res.json()).then(data=>{
        const condition = data.current.condition.text
        const icon = data.current.condition.icon
        const city = data.location.name
        const state = data.location.region
        const tempC = data.current.temp_c
        img_icon.src = icon
        img_icon.alt="Icon Not Found"
        img_icon.classList.add("card_icon")
        img_icon.classList.remove("hidden")
        left.appendChild(img_icon)

        tempHeading.innerText = tempC+" deg"+" C"

       
        conditionHeading.innerText = condition
        
        
       
        cityHeading.innerText = city+","+state
    

        right.appendChild(tempHeading)
        right.appendChild(conditionHeading)
        right.appendChild(cityHeading)


        infoCtn.appendChild(left)
        infoCtn.appendChild(right)

        console.log(condition)
        console.log(icon)
    }).catch(err=>{
        console.log(err)
    })
    // console.log(res)




    inputField.value = ""
}



searchBtn.addEventListener("click",getValue)