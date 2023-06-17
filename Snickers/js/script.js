
const  imgSlider = (anything,color) =>{
    document.querySelector('.snickers').src = anything
      document.querySelector('.circle').style.background = color 
}

const toggleMenu = () =>{
    const toggle = document.querySelector('.toggle')
    const navigation = document.querySelector('.nav')

       toggle.addEventListener('click', ()=> {
        toggle.classList.toggle('active')
        navigation.classList.toggle('active')   

     })
    
}

toggleMenu()