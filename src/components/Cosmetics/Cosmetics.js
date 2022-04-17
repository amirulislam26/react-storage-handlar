import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
const Cosmetics = () => {

    const cosmetics = [
        {
            "id": "625b42ac657b85afe4b1f3eb",
            "index": 0,
            "guid": "9b3fd8d6-a280-4fd4-be6d-04659036dd62",
            "isActive": true,
            "balance": "$2,509.53",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "eyeColor": "green",
            "name": "Margaret Gibson",
            "gender": "female",
            "company": "FARMAGE",
            "email": "margaretgibson@farmage.com"
        },
        {
            "id": "625b42ac7013511af4c0610f",
            "index": 1,
            "guid": "59bd63b1-8840-4028-adb5-5d3cd49bc312",
            "isActive": false,
            "balance": "$3,521.37",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "green",
            "name": "Francesca Vaughn",
            "gender": "female",
            "company": "GEEKULAR",
            "email": "francescavaughn@geekular.com"
        },
        {
            "id": "625b42ac2d1efbb3b293b67b",
            "index": 2,
            "guid": "727523da-4042-4e7f-8e74-2cc904d225f0",
            "isActive": false,
            "balance": "$3,257.88",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "brown",
            "name": "Reed Keller",
            "gender": "male",
            "company": "PRINTSPAN",
            "email": "reedkeller@printspan.com"
        },
        {
            "id": "625b42ac3bf1e858a3e894af",
            "index": 3,
            "guid": "6b96d0ac-d830-4275-935a-7fc6446440b0",
            "isActive": false,
            "balance": "$3,933.47",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Vonda Michael",
            "gender": "female",
            "company": "KONNECT",
            "email": "vondamichael@konnect.com"
        },
        {
            "id": "625b42ac6177c0f445aa1e55",
            "index": 4,
            "guid": "2241861a-b073-49d7-a6e6-f8a48cc27e2f",
            "isActive": true,
            "balance": "$2,555.53",
            "picture": "http://placehold.it/32x32",
            "age": 35,
            "eyeColor": "brown",
            "name": "Newton Hopper",
            "gender": "male",
            "company": "MUSANPOLY",
            "email": "newtonhopper@musanpoly.com"
        },
        {
            "id": "625b42ac349dfa2a6e957be0",
            "index": 5,
            "guid": "bfa67b2b-7bc5-49b4-8ece-3ed97733fce8",
            "isActive": true,
            "balance": "$1,678.48",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Esperanza Vincent",
            "gender": "female",
            "company": "ZYTREK",
            "email": "esperanzavincent@zytrek.com"
        }
    ]

    /*........................................................................
        // const cosmetics = [
        //     { id: 1, name: 'laptop', price: 45000 },
        //     { id: 2, name: 'phone', price: 5000 },
        //     { id: 3, name: 'watch', price: 4000 },
        //     { id: 4, name: 't-Shart', price: 400 },
        //     { id: 5, name: 'panjami', price: 300 },
    
        // ]
        ....................................................................*/
    return (
        <div>
            <h1 className='text-color'>Wolcome to my Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;