const input = "Input String By PW";

function reverseString(str)
{
    let rev = '';
    for(let i = str.length-1 ; i>=0; i--)
    {
        rev += str[i]
    }
    return rev
}

const delay = 2000;

setTimeout(function()
{
    const reversed = reverseString(input);
    console.log(reversed);
}, delay)