// var bucketRegion = "us-east-2";
// var IdentityPoolId = "us-east-2:d97e5d9c-71b8-4264-9859-2bb14939dde0";

// AWS.config.update({
//   region: bucketRegion,
//   credentials: new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: IdentityPoolId
//   })
// });

var quicksight = new AWS.QuickSight({apiVersion: '2018-04-01'});

console.dir(quicksight)