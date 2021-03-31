// const { CognitoIdentityClient, GetIdCommand } = require("@aws-sdk/client-cognito-identity");
// const { fromCognitoIdentityPool } = require("@aws-sdk/credential-provider-cognito-identity");

// //set the parameter
// const IDENTITY_POOL_ID = 'us-east-2:d97e5d9c-71b8-4264-9859-2bb14939dde0';
// const ACCOUNT_ID = '285236033688';

// console.log("working");

// //initialize the amazon cognito credential provider
// const cognitoidentity = new CognitoIdentityClient({
//     region: "us-east-2",
//     credentials: fromCognitoIdentityPool({
//       client: new CognitoIdentityClient({ region: "us-east-2" }),
//       identityPoolId: IDENTITY_POOL_ID
//     }),
// });

// const getIdParams = {
//     IdentityPoolId: IDENTITY_POOL_ID,
//     AccountId: ACCOUNT_ID
// };

// const showId = async () => {
//     try {
//       const data = await cognitoidentity.send(new GetIdCommand(getIdParams));
//       const results = "Cognito Identity ID is " + data.IdentityId;
//       document.getElementById("results").innerHTML = results;
//     } catch (err) {
//       const errorResults = "Error" + err;
//       document.getElementById("results").innerHTML = results;
//     }
// };

// // Make function available to browser
// window.showId = showId;


