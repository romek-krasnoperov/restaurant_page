const headerOfPage = () => {
    const content = document.getElementById('content')

    // creating header

    const header = document.createElement('nav')

    //adding buttons
    //Home
    const buttonHome = document.createElement('button')
    buttonHome.setAttribute('id', 'btn-home')
    const aHome = document.createElement('a')
    aHome.textContent = 'Home'
    aHome.href = '#'
    buttonHome.appendChild(aHome)
    header.appendChild(buttonHome)

    //Menu
    const buttonMenu = document.createElement('button')
    buttonMenu.setAttribute('id', 'btn-menu')
    const aMenu = document.createElement('a')
    aMenu.textContent = 'Menu'
    aMenu.href = '#'
    buttonMenu.appendChild(aMenu)
    header.appendChild(buttonMenu)

    //Contact
    const buttonContact = document.createElement('button')
    buttonContact.setAttribute('id', 'btn-contact')
    const aContact = document.createElement('a')
    aContact.textContent = 'Contact'
    aContact.href = '#'
    buttonContact.appendChild(aContact)
    header.appendChild(buttonContact)

    content.appendChild(header)
}

export function contactPage() {

    headerOfPage()

    const mainHtml = `
    <main>
        <div class="logo">Contact us by phone</div>
        <div class="location">
            <div class="title">Phone: +00 123-456-789</div>
        </div>
    </main>
    `
    content.insertAdjacentHTML('beforeend', mainHtml)
}