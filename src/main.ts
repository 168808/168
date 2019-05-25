import './scss/index.scss'
import googlelogo from '../public/images/googlelogo.png'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component () {
  const element = document.createElement('div')
  element.innerHTML = `<img src="${googlelogo}" alt="google logo"/>`
  return element
}

document.body.appendChild(component())