
// const axios = require('axios');
require("dotenv").config();
// const { data } = require('../../temp/temp3');
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;
const PINATA_JWT = process.env.PINATA_JWT;



// sample metadata
const data = {
    "description": "This is Warranty for rolex watch!",
    "external_url": "Alchemy.com/?a=roadtoweb3weekone",
    "image": "https://ipfs.filebase.io/ipfs/QmVFybU1zasqKrsz3YmAz1bmtw7WHdkq5pdAm1ZJBko1gH",
    "name": "Rolex Watch1",
    "attributes": [
        {
            "trait_type": "Price",
            "value": "100$"
        },
        {
            "trait_type": "Timestamp",
            "value": "10:02"
        }
    ]
};

async function uploaddata() {






    //authentication using axios



    // console.log(PINATA_API_KEY, PINATA_API_SECRET);
    // axios.get("https://api.pinata.cloud/data/testAuthentication", {
    //     headers: {
    //         // "pinata_api_key": PINATA_API_KEY,
    //         // "pinata_secret_api_key": PINATA_API_SECRET
    //         "Authorization":"Bearer PINATA-eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NWVkODAwOS0xNDIxLTQ0N2QtYWMwYy03NjE5ZTJiNDgxZmIiLCJlbWFpbCI6InB1c2hrYXJqb3NoaTE5MTUyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmYTQ0YWVjNTk2MDg5M2Q3ZWEzYiIsInNjb3BlZEtleVNlY3JldCI6IjQxYmI1ZmQ4YmRkOTg2YjI2M2U4YzUxZGEwMzliZDJhYjQ2NDFlZjc0MmY2NGE1MGY3ZmM4NDhhZmZkYjY0MDciLCJpYXQiOjE2NzEwODcxODd9.oyuCAH1KiAMxHg9abElF43xVOcqyfif12hXMKX4ew_c"
    //     }
    // }).then((res) => {
    //     console.log(res.data);
    // })


    //auth using pinata sdk

    const pinataSDK = require('@pinata/sdk');
    const pinata = new pinataSDK({ pinataApiKey: PINATA_API_KEY, pinataSecretApiKey: PINATA_API_SECRET });
    pinata.testAuthentication().then((result) => {

        const options = {
            pinataMetadata: {
                name: 'MetadataUpload1',
                keyvalues: {
                    customKey: 'customValue',
                    customKey2: 'customValue2'
                }
            },
            pinataOptions: {
                cidVersion: 0
            }
        };

        pinata.pinJSONToIPFS(data,options).then((result) => {
            //handle results here
            console.log(result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });

    }).catch((err) => {
        //handle error here
        console.log(err);
    });

}
uploaddata();
// Use the api keys by specifying your api key and api secret
