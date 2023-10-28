/*
URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/
// URL --> /((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g
// pattern reference --> https://regexr.com/

// regex for valid URLs
function  validURL(url)
{
    const urlPattern = /((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g
    //console.log(urlPattern);

    // check if the input match the partten

    if(urlPattern.test(url))
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Test URl

const url1 = "https://regexr.com";
const url2 = "http://www.google.com";
const url3 = "httgsp:\\sss.yahoo.zz";
const url4 = "zz.yahoo.sss\\:psgtth";
const url5 = "https://rahemur.rahaman";

console.log(`URL 1 is valid: ${validURL(url1)}`);
console.log(`URL 2 is valid: ${validURL(url2)}`);
console.log(`URL 3 is valid: ${validURL(url3)}`);
console.log(`URL 4 is valid: ${validURL(url4)}`);
console.log(`URL 5 is valid: ${validURL(url5)}`);
