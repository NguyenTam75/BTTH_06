// Ex1
const dog = {}
console.log(dog)
dog.name = 'Beggie'
dog.legs = 4
dog.age = 1
dog.bark = function(){
    return 'woof woof'
}
console.log(dog.bark())
let valuesOfDog = Object.values(dog)
console.log(valuesOfDog)
dog.breed = 'Chó tây'
dog.getDogInfo = function(){
    console.log(`Thông tin về con Chó: Tên - ${this.name}`)
}

dog.getDogInfo()

//Ex2

const users = {
         Alex: {
           email: 'alex@alex.com',
           skills: ['HTML', 'CSS', 'JavaScript'],
           age: 20,
           isLoggedIn: false,
           points: 30
         },
         Asab: {
           email: 'asab@asab.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
           age: 25,
           isLoggedIn: false,
           points: 50
         },
         Brook: {
           email: 'daniel@daniel.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
           age: 30,
           isLoggedIn: true,
           points: 50
         },
         Daniel: {
           email: 'daniel@alex.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
           age: 20,
           isLoggedIn: false,
           points: 40
         },
         John: {
           email: 'john@john.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
           age: 20,
           isLoggedIn: true,
           points: 50
         },
         Thomas: {
           email: 'thomas@thomas.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'React'],
           age: 20,
           isLoggedIn: false,
           points: 40
         },
         Paul: {
           email: 'paul@paul.com',
           skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
           age: 20,
           isLoggedIn: false,
           points: 40
         }
       }

            // 1. Find people who are MERN stack developer from the users object
          
            const findMERN = (obj) => {
                const MERN = {};
                for (let key in obj) {
                    if (obj[key].skills.includes('MongoDB') && obj[key].skills.includes('Express') && obj[key].skills.includes('React') && obj[key].skills.includes('Node')) {
                        MERN[key] = obj[key];
                    }
                }
                return MERN;
            }
            console.log(findMERN(users))
            //Set your name in the users object without modifying the original users object
            const returnedTarget = Object.assign(Hai, Thomas);

            //Get all keys or properties of users object
            let keys = Object.keys(users)
            console.log(keys)
            //Get all values of users object
            let values = Object.values(users)
            console.log(values)
            //Use the countries object to print a country name, capital, populations and languages.
            let countries = {
                Afghanistan: {
                    capital: 'Kabul',
                    population: 27657145,
                    languages: ['Dari', 'Pashto', 'Turkmen']
                },
                Albania: {
                    capital: 'Tirana',
                    population: 2831741,
                    languages: ['Albanian']
                },
                Algeria: {
                    capital: 'Algiers',
                    population: 37100000,
                    languages: ['Arabic']
                },
                Andorra: {
                    capital: 'Andorra la Vella',
                    population: 78115,
                    languages: ['Catalan']
                },
                Angola: {
                    capital: 'Luanda',
                    population: 25868000,
                    languages: ['Portuguese']
                },
            }
            console.log(countries.Afghanistan.capital)
            console.log(countries.Albania.languages)
            console.log(countries.Algeria.population)
            console.log(countries.Andorra.languages)

            const users = [
                      {
                          _id: 'ab12ex',
                          username: 'Alex',
                          email: 'alex@alex.com',
                          password: '123123',
                          createdAt:'08/01/2020 9:00 AM',
                          isLoggedIn: false
                      },
                      {
                          _id: 'fg12cy',
                          username: 'Asab',
                          email: 'asab@asab.com',
                          password: '123456',
                          createdAt:'08/01/2020 9:30 AM',
                          isLoggedIn: true
                      },
                      {
                          _id: 'zwf8md',
                          username: 'Brook',
                          email: 'brook@brook.com',
                          password: '123111',
                          createdAt:'08/01/2020 9:45 AM',
                          isLoggedIn: true
                      },
                      {
                          _id: 'eefamr',
                          username: 'Martha',
                          email: 'martha@martha.com',
                          password: '123222',
                          createdAt:'08/01/2020 9:50 AM',
                          isLoggedIn: false
                      },
                      {
                          _id: 'ghderc',
                          username: 'Thomas',
                          email: 'thomas@thomas.com',
                          password: '123333',
                          createdAt:'08/01/2020 10:00 AM',
                          isLoggedIn: false
                      }
                      ];
                
                      const products = [
                    {
                      _id: 'eedfcf',
                      name: 'mobile phone',
                      description: 'Huawei Honor',
                      price: 200,
                      ratings: [
                        { userId: 'fg12cy', rate: 5 },
                        { userId: 'zwf8md', rate: 4.5 }
                      ],
                      likes: []
                    },
                    {
                      _id: 'aegfal',
                      name: 'Laptop',
                      description: 'MacPro: System Darwin',
                      price: 2500,
                      ratings: [],
                      likes: ['fg12cy']
                    },
                    {
                      _id: 'hedfcg',
                      name: 'TV',
                      description: 'Smart TV:Procaster',
                      price: 400,
                      ratings: [{ userId: 'fg12cy', rate: 5 }],
                      likes: ['fg12cy']
                    }
                  ]

