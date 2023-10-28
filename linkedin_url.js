/*
LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.*/
/*--------------------------------------------------------------------------------------*/

// URL --> /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/
// pattern reference --> https://stackoverflow.com/questions/8450403/how-to-validate-a-linkedin-public-profile-url

// regex for valid URLs
function  validURL(url)
{
    const urlPattern = /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

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

const url1 = "https://www.linkedin.com/in/sk-rahemur-rahaman-76444222b/";
const url2 = "https://www.linkedin.com/showcase/aws-training-&-certification/";
const url3 = "https://www.hotstar.com/in/home";
const url4 = "https://regexr.com/#native_link#";
const url5 = "https://learn.pwskills.com/lesson/What-is-regex-and-Different-Character-in-Regex-and-importance-Writting-regex-with-example/6405951b182c6770684c4e59/course/Full-Stack-web-development-1.0/63a2ecf58899439c8d7ebdc6#";

console.log(`URL 1 is a valid LinkedIn profile URL: ${validURL(url1)}`);
console.log(`URL 2 is a valid LinkedIn profile URL: ${validURL(url2)}`);
console.log(`URL 3 is a valid LinkedIn profile URL: ${validURL(url3)}`);
console.log(`URL 4 is a valid LinkedIn profile URL: ${validURL(url4)}`);
console.log(`URL 5 is a valid LinkedIn profile URL: ${validURL(url5)}`);
