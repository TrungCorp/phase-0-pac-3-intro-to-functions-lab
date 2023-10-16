function shout(string)
{
    return string.toUpperCase();
}
function whisper(whisperVar)
{
    return whisperVar.toLowerCase();
}
function logShout(logShoutVar)
{
    logShoutVar = logShoutVar.toUpperCase();
    console.log(logShoutVar);
}
function logWhisper(logWhisperVar)
{
    console.log(`${logWhisperVar.toLowerCase()}`);
}

function sayHiToHeadphonedRoommate(var1)
{
    let varAlt1 = var1.toLowerCase();
    let varAlt2 = var1.toUpperCase();

    if(var1 === varAlt1)
    {
        return "I can't hear you!";
    }
    else if(var1 ===varAlt2)
    {
        return "YES INDEED!";
    }
    else if (var1==="Let's have dinner together!");
    {
        return "I would love to!";
    }

}