const Navmenu = document.getElementById('nav-menu'),
      Navtoggle = document.getElementById('nav-toggle'),
      Navclose = document.getElementById('nav-close')

      if(Navtoggle){
        Navtoggle.addEventListener('click', () =>{
            Navmenu.classList.add('showmenu')
        }
        )
      }
if(Navclose){
    Navclose.addEventListener('click', () =>{
        Navmenu.classList.remove('showmenu')
    }
    )
}      

const Navlink = document.querySelectorAll('.nav__link')

const Linkaction = () =>{
    const Navmenu = document.getElementById('nav-menu')

    Navmenu.classList.remove('showmenu')
}
Navlink.forEach(n => n.addEventListener('click', Linkaction))

// shadow header
const shadowheader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadowheader')
                       : header.classList.remove('shadowheader')
}
window.addEventListener('scroll', shadowheader)