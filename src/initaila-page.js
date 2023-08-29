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

export function initialPage() {

    headerOfPage()

    // creating main
    const mainHtml = `
    <main>
    <div class="logo">The best pizza in the town!</div>
    <div class="description">
        <p>
            Indulge in pizza perfection at our town's finest pizzeria. Savor artisanal flavors crafted from the
            freshest ingredients, expertly baked to a golden, crispy perfection. Join us for a slice of culinary
            heaven that redefines your pizza experience.
        </p>
    </div>
    <div class="hours">
        <div class="title">Hours</div>
        <ul>
            <li>Sunday: 8am - 8pm</li>
            <li>Monday: 6am - 6pm</li>
            <li>Tuesday: 6am - 6pm</li>
            <li>Wednesday: 6am - 6pm</li>
            <li>Thursday: 6am - 10pm</li>
            <li>Friday: 6am - 10pm</li>
            <li>Saturday: 8am - 10pm</li>
        </ul>
    </div>
    <div class="location">
        <div class="title">Location</div>
        <div class="address">123 Forest Str., Forest - York, York</div>
    </div>
    </main>
    `
    content.insertAdjacentHTML('beforeend', mainHtml)
}


// export function menuPage() {

//     headerOfPage()

//     const mainHtml = `
//     <main>
//             <div class="logo">Our menu</div>
//             <div class="location">
//                 <div class="title">Margherita Pizza</div>
//                 <div class="address">
//                     A classic choice featuring a thin crust topped with fresh tomato sauce, slices of mozzarella
//                     cheese,and fragrant basil leaves. The Margherita pizza embodies simplicity and balance, showcasing
//                     the harmonious combination of flavors.
//                 </div>
//             </div>

//             <div class="location">
//                 <div class="title">Pepperoni Pizza</div>
//                 <div class="address">
//                     This crowd-pleaser boasts a flavorful foundation of tomato sauce and melted mozzarella cheese,
//                     generously adorned with savory, slightly spicy pepperoni slices. The crisp pepperoni edges create a
//                     delightful contrast to the gooey cheese and tangy sauce.
//                 </div>
//             </div>

//             <div class="location">
//                 <div class="title">Hawaiian Pizza</div>
//                 <div class="address">
//                     A controversial yet beloved option, the Hawaiian pizza presents a blend of sweet and savory. It's
//                     topped with tomato sauce, mozzarella cheese, ham, and juicy pineapple chunks. The contrasting
//                     flavors of the ham and pineapple create a unique and enjoyable experience.
//                 </div>
//             </div>

//             <div class="location">
//                 <div class="title">BBQ Chicken Pizza</div>
//                 <div class="address">
//                     For those who crave a smoky, tangy twist, the BBQ chicken pizza delivers. Featuring a barbecue sauce
//                     base, tender pieces of grilled chicken, red onions, and a mix of mozzarella and cheddar cheeses,
//                     this pizza offers a delightful balance of flavors.
//                 </div>
//             </div>

//             <div class="location">
//                 <div class="title">Supreme Pizza</div>
//                 <div class="address">
//                     The supreme pizza is a hearty and diverse combination of toppings. It typically features tomato
//                     sauce, mozzarella cheese, pepperoni, Italian sausage, green peppers, onions, and black olives. This
//                     medley of ingredients creates a satisfying and satisfyingly flavorful slice.
//                 </div>
//             </div>
//         </main>
//     `
//     content.insertAdjacentHTML('beforeend', mainHtml)
// }

// export function contactPage() {

//     headerOfPage()

//     const mainHtml = `
//     <main>
//         <div class="logo">Contact us by phone</div>
//         <div class="location">
//             <div class="title">Phone: +00 123-456-789</div>
//         </div>
//     </main>
//     `
//     content.insertAdjacentHTML('beforeend', mainHtml)
// }