
// let menuArray = [
// { 
//   url: 'index.html',
//   title: 'Main'
// },
// { 
//   url: 'about.html',
//   title: 'About'
// },
// { 
//   url: 'portfolio.html',
//   title: 'Portfolio'
// },
// { 
//   url: 'contact.html',
//   title: 'Contact'
// }
// ]



// const navElement = document.createElement('nav')
// const ulElement = document.createElement('ul')
// ulElement.className = 'main-menu'  


//  for (let i = 0; i < menuArray.length; i++) {

//     const liElement = document.createElement('li')
// 	liElement.className = 'menu-item'

// 	const aElement = document.createElement('a')
// 	aElement.href = menuArray[i].url
// 	aElement.textContent = menuArray[i].title
//  liElement.append(aElement)
//  ulElement.append(liElement)

//  }
//  navElement.append(ulElement)

//  document.body.prepend(navElement)

// 





// let menuArray = [
// { 
//   url: '#',
//   titleSection: 'Математика',
//   img: src='./images/math.png',
//   url: '#',
//   title: 'Котосови',
//   divPrice: '',
//   soon: 'Незабаром у продажі'
// },
// { 
//   url: '#',
//   titleSection: 'Подарунок',
//   img: src='./images/math.png',
//   url: '#',
//   title: 'Набір розумника',
//   divPrice: '190',
//   soon: 'Незабаром у продажі'
// },
// { 
//   url: '#',
//   titleSection: 'Усний рахунок',
//   img: src='./images/math.png',
//   url: '#',
//   title: 'Турборахунок',
//   divPrice: '230',
//   soon: 'Незабаром у продажі'
// },
// { 
//   url: '#',
//   titleSection: 'Букви та читання',
//   img src = './images/math.png',
//   url: '#',
//   title: 'Тваринобукви',
//   divPrice: '320',
//   soon: 'Незабаром у продажі'
// } 
// ]
// console.log(menuArray)


//  for (let i = 0; i < menuArray.length; i++) {

//  const container = document.createElement('div')
//  container.className = 'container'

//  const aElement = document.createElement('a')
//  aElement.className = 'section'
//  aElement.href = menuArray[i].url
//  aElement.textContent = menuArray[i].titleSection

//  const imageCard = document.getElementsByTagName('img')
//   imageCard = menuArray[i].img

//   const bElement = document.createElement('a')
//   bElement.className = 'title'
//   bElement.href = menuArray[i].url
//   bElement.textContent = menuArray[i].title

//   const priceContainer = document.createElement('div')
//   priceContainer.className = 'price'
//   priceContainer = menuArray[1].divPrice
  
//   const soon = document.createElement('div')
//   soon.className = 'soon'
//   soon.textContent = menuArray[i].soon


//   container.append(aElement)
//   container.append(imageCard)
//   container.append(bElement)
//   container.append(priceContainer)
//   container.append(soon)
//   wrapElement.append(container)
//  }
// console.log(menuArray)



const wrapElement = document.createElement('div')
wrapElement.className = 'page-wrapper'
document.body.prepend(wrapElement)

const hElement = document.createElement('h1')
hElement.className = 'h'
hElement.textContent = 'Обовязково додайте своє замовлення' 
document.body.prepend(hElement)

const arrowLeft = document.createElement('div')
arrowLeft.className = 'arrow-left'
arrowLeft.textContent = '<'
wrapElement.append(arrowLeft)

const arrowRight = document.createElement('div')
arrowRight.className = 'arrow-right'
arrowRight.textContent = '>'
wrapElement.append(arrowRight)

const container = document.createElement('div')
container.className = 'container'
wrapElement.append(container)

const spriteNew = document.createElement('div')
spriteNew.className = 'sprite-new'
spriteNew.textContent = 'Новинка'
container.append(spriteNew)

const aElement = document.createElement('a')
aElement.href = ''
aElement.className = 'section'
aElement.textContent = 'Математика'
container.append(aElement)

const imageCard = document.createElement('img')
imageCard.src = "./images/math.png"
container.append(imageCard)

const bElement = document.createElement('a')
bElement.href = ''
bElement.className = 'title'
bElement.textContent = 'Котосови'
container.append(bElement)

const price = document.createElement('div')
price.className = 'price'
container.append(price)

const soon = document.createElement('div')
soon.className = 'soon'
soon.textContent = 'Незабаром у продажі'
container.append(soon)



// -----------Container2-----------

const container2 = document.createElement('div')
container2.className = 'container'
wrapElement.append(container2)

const aElement2 = document.createElement('a')
aElement2.href = ''
aElement2.className = 'section'
aElement2.textContent = 'Подарунок'
container2.append(aElement2)

const imageCard2 = document.createElement('img')
imageCard2.src = "./images/g1.png"
container2.append(imageCard2)

const bElement2 = document.createElement('a')
bElement2.href = ''
bElement2.className = 'title'
bElement2.textContent = 'Набір розумника'
container2.append(bElement2)

const price2= document.createElement('div')
price2.className = 'price'
price2.textContent = '210грн'
container2.append(price2)

// const wrongPrice = document.createElement('div')
// wrongPrice = 'wrong-price'
// wrongPrice.textContent = '190грн'
// price2.append(wrongPrice)

const basket = document.createElement('div')
basket.className = 'soon basket'
basket.textContent = 'У корзину'
container2.append(basket)


// -----------Container3-----------

const container3 = document.createElement('div')
container3.className = 'container'
wrapElement.append(container3)

const spriteHit = document.createElement('div')
spriteHit.className = 'sprite-hit-1'
spriteHit.textContent = 'Хіт продажів'
container3.append(spriteHit) 

const aElement3 = document.createElement('a')
aElement3.href = ''
aElement3.className = 'section'
aElement3.textContent = 'Усний рахунок'
container3.append(aElement3)

const imageCard3 = document.createElement('img')
imageCard3.src = "./images/turbo.png"
container3.append(imageCard3)

const bElement3 = document.createElement('a')
bElement3.href = ''
bElement3.className = 'title'
bElement3.textContent = 'Турборахунок'
container3.append(bElement3)

const price3= document.createElement('div')
price3.className = 'price'
price3.textContent = '320грн'
container3.append(price3)

// const wrongPrice = document.createElement('div')
// wrongPrice = 'wrong-price'
// wrongPrice.textContent = '190грн'
// price2.append(wrongPrice)

const basket2 = document.createElement('div')
basket2.className = 'soon basket'
basket2.textContent = 'У корзину'
container3.append(basket2)



// -----------Container4-----------


const container4 = document.createElement('div')
container4.className = 'container'
wrapElement.append(container4)

const spriteHit2 = document.createElement('div')
spriteHit2.className = 'sprite-hit'
spriteHit2.textContent = 'Хіт продажів'
container4.append(spriteHit2) 

const aElement4 = document.createElement('a')
aElement4.href = ''
aElement4.className = 'section'
aElement4.textContent = 'Букви та читання'
container4.append(aElement4)

const imageCard4 = document.createElement('img')
imageCard4.src = "./images/zb.png"
container4.append(imageCard4)

const bElement4 = document.createElement('a')
bElement4.href = ''
bElement4.className = 'title'
bElement4.textContent = 'Тваринобукви'
container4.append(bElement4)

const price4= document.createElement('div')
price4.className = 'price'
price4.textContent = '450грн'
container4.append(price4)

// const wrongPrice = document.createElement('div')
// wrongPrice = 'wrong-price'
// wrongPrice.textContent = '190грн'
// price2.append(wrongPrice)

const basket3 = document.createElement('div')
basket3.className = 'soon basket'
basket3.textContent = 'У корзину'
container4.append(basket3)