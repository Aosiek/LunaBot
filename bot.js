const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "-"



var meow = [
    "MeeeEEEEEooooOOOOwwwWWW",
    "MiiiiIIIIaaaaAAAAAAuuuUUU",
    "NyAAAAAAaaaaan",
    "Nie miauczę na życzenie plebsu.",
    "Bork, bork~! Ups...",
    "Spadaj sobie do wulkanu.",
];

var slaps = [
    "Sika na łóżko ",
    "Gryzie w łydkę ",
    "Prycha na ",
    "Ostrzy pazury na ",
    "Uderza cegłówką owiniętą w plasterek cytryny ",
    "Liże w nos ",
];

var cytat = [
    "Budyń to dobry deser, ale nie sprawdza się jako sanki.",
    "Wielkie ego, mały penis.",
    "LULULULULULULULULULULULULULU(...)LULU.",
    "Nie poddawaj się! Walcz za swoje marzenia! Co masz do stracenia? NIC! Walcz i nie poddawaj się, walcz o... CZY TO DRAVEN NA BOCIE? OMG, SURR @15.",
    "Hitler nie wiedział o Holokauście.",
    "Trapy to nic złego.",
];

var pytania = [
    "Tak.",
    "Nie.",
    "Mooże.",
    "Chyba kpisz.",
    "Jak dostanę karmę do żarcia to się zastanowię.",
    "LOL, jesteś zwykłym randomem, kpisz sobie",
    "Całuj me łapki, a nie zadajesz durne pytania",
    "Zastanowię się.",
    "WSZYSTKO CZEGO DZIŚ CHCĘ...",
];

var help = [
    "```Lista komend:",
    "-ping - sprawdź, czy żyję",
    "-pong - sprawdź, czy żyję, znowu",
    "-info - wyświetla informacje o mnie",
    "-help - wyświetla listę komend",
    "-meow - może zamiauczę, spróbuj",
    "-slaps - zaczep kogoś",
    "-8ball - zapytaj, a może Ci odpowiem",
    "-cat - pokażę Ci małe kotki ( ͡° ͜ʖ ͡°)",
    "-cytat - mądrości mojego ludu",
    "-bored - nuuuuuda```",
];

var cat = [
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "http://i.imgur.com/QcbA2bh.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/9JLQKmspQAMWQ/giphy.gif",
    "https://media.giphy.com/media/l41lTn1liPDzkv0Zi/giphy.gif",
    "https://media.giphy.com/media/5HSYaZTcRpYnS/giphy.gif",
    "https://media.giphy.com/media/t7MWRoExDRF72/giphy.gif",
    "https://media.giphy.com/media/s4xpWHHGDZ2a4/giphy.gif",
];



client.on("ready", () => {
client.user.setPresence({ game: { name: '/ᐠ｡ꞈ｡ᐟ✿\ -help | -info', type: 0 } });
});

client.on('message', message => {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.lenght).split(" ");
    switch (args[0].toLowerCase()) {


        case "-ping":
        message.channel.send("Pong!");
        break;
        
        case "-pong":
        message.channel.send("Ping");
        break;

        case "-info":
        var embedinfo = new Discord.RichEmbed()
        .setTitle("Informacje o LunaBot")
        .addField("Nazwa Bota: ", client.user.username, true)
        .addField("Stworzona: ", "15.04.2017", true)
        .addField("Przez:", "@Aoi#5194", true)
        .addField("Ostatnia aktualizacja:", "05.06.2018 r.", true)
        .setColor(0x33CCCC)
        .setFooter("Witaj ziemska istoto! Jestem LunaBot, potężny imperator ludzkich umysłów. Padnij na kolana przed mym wdziękiem i zachwytem!")
        .setThumbnail(client.user.displayAvatarURL)
        message.channel.sendEmbed(embedinfo);
        break;
        
        case "-help":
        message.author.send(help);
        break;

        case "-meow":
        message.channel.send(message.author.toString()+ " " + meow[Math.floor(Math.random() * meow.length)]);
        break;

        case "-cytat":
        message.channel.send(cytat[Math.floor(Math.random() * cytat.length)]);
        break;

        case "-8ball":
        message.channel.send(pytania[Math.floor(Math.random() * pytania.length)]);
        break;

        case "-slaps":
        message.channel.send(slaps[Math.floor(Math.random() * slaps.length)] + message.mentions.members.first());
        break;

        case "-cat":
        message.channel.send(cat[Math.floor(Math.random() * cat.length)]);
        break;
            
        case "-bored":
        message.channel.send("https://www.youtube.com/watch?v=SEntHIpylrc");
        break;
        
            
        default:
        message.channel.send("Jakiś błąd nam się wkradł, czy mi się wydaje?");


    };
});

client.login(process.env.BOT_TOKEN);
