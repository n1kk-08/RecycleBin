import bcrypt from 'bcryptjs'

const data ={
    users:[
        {
            name: 'John',
            email: 'john@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Jane',
            email: 'jane@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Car Scrap',
            slug: 'car-scrap',
            image: '/images/car-scrap.jpeg',
            price: 100,
            category: 'Car Scrap',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'A 3 year old car scrap with engine and other parts intact',
        },
        {
            name: 'Paper waste',
            slug: 'paper-waste',
            image: '/images/paper.jpeg',
            price: 15,
            category: 'Paper',
            rating: 4.1,
            numReviews: 10,
            countInStock: 40,
            description: 'Newspaper waste from a local printing press',
        },
        {
            name: 'Plastic waste',
            slug: 'plastic-waste',
            image: '/images/plastic.jpeg',
            price: 15,
            category: 'Plastic',
            rating: 4.0,
            numReviews: 10,
            countInStock: 50,
            description: 'Plastic waste from a local recycling plant',
        },
        
    ]

}
export default data