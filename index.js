// Create an ObsClient instance.
var obsClient = new ObsClient({
    // Hard-coded or plaintext AK and SK are risky. For security purposes, encrypt your AK and SK and store them in the configuration file or environment variables. In this example, the AK and SK are stored in environment variables for identity authentication. Before running the code in this example, configure environment variables AccessKeyID and SecretAccessKey.
    // Obtain an AK and SK pair on the management console. For details, see https://support.huaweicloud.com/intl/en-us/usermanual-ca/ca_01_0003.html.
    access_key_id: "UQJZ4M9B27QATZKMSYUV",
    secret_access_key: "ILOU00VApp2Q8fazC8QFACBCPPt8L4GQpQOeQIP0"   ,
    server : 'https://obs.la-north-2.myhuaweicloud.com',
    signature : 'obs'
});

// Configure form parameters.
var formParams = {
              // Set the object ACL to public-read.
              'x-obs-acl': obsClient.enums.AclPublicRead, 
              // Configure the object's MIME type.
              'content-type': 'text/plain'           
};

// Configure the validity period (in seconds) for a browser-based upload request.
var expires = 3600;

var res = obsClient.createPostSignatureSync({Expires:expires, FormParams: formParams});

// Obtain the request parameters.
console.log('\t' + res.Policy);
console.log('\t' + res.Signature);
