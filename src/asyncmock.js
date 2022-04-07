const products = [
    { 
        id: 1, 
        name: 'ps4', 
        price: 80000, 
        category: 'consola', 
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/1280px-PS4-Console-wDS4.jpg', 
        stock: 9, 
        description:'Descripcion de ps4'
    },
    { id: 2, name: 'xbox', price: 18000, category: 'consola', img:'https://compass-ssl.xbox.com/assets/a7/fa/a7facf03-2cb6-4f20-81a1-ac7e7773fab6.jpg?n=Resident-Evil-Village_Feature-0_XSX_767x628.jpg', stock: 6, description:'wii'},
    { id: 3, name: 'wii', price: 50000, category: 'consola', img:'https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png', stock: 8, description:'wii'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
} 