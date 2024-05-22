

function createInfiniteScrollBehaviour(){
    const mainCtn = document.getElementsByClassName("main-ctn")[0]
    const loader = document.getElementsByClassName("loader")[0]

    
    const fetchContent = async ()=>{
        const baseUrl = "https://api.unsplash.com/"
        const aceessKey = "4ABJgbhwXABIuXjWprjLfx-tJ5B0arlA8XhiMcce_fA"
        const api = baseUrl+"photos/random/"+"?client_id="+aceessKey
        const res = await fetch(api)
        const data = res.json()
        return data
    }

    //fetchContent()
    const loadMoreContent = async ()=>{
        loader.classList.remove("hidden")
        const newContentData = await fetchContent()
        console.log(newContentData)
        const myImage = document.createElement("img")
        myImage.classList.add("image")
        myImage.src = newContentData.urls.small
        myImage.alt = "Image Not Found"
        mainCtn.appendChild(myImage)
        loader.classList.add("hidden")
    }

    const handleScroll = ()=>{
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
            loadMoreContent()
        }
    }
    loadMoreContent()
    window.addEventListener("scroll",handleScroll)
}





document.addEventListener('DOMContentLoaded',createInfiniteScrollBehaviour)