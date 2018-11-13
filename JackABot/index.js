var da = new Date();
var d =
  da.getDate() +
  '/' +
  (da.getMonth() + 1) +
  ' ' +
  da.getHours() +
  ':' +
  da.getMinutes() +
  '.' +
  da.getMilliseconds();
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
client.on('message', msg => {
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
});
const images = [
  'https://img.rasset.ie/000f70fd-800.jpg',
  'https://i.pinimg.com/236x/f1/2a/01/f12a01f20e09e1ab5af0050aa9fe513b--jack-septiceye-great-friends.jpg',
  'https://78.media.tumblr.com/dd76b6b95647445f7d19057568dbb6a0/tumblr_oydvosT7dx1ssfeqho7_400.gif',
  'https://78.media.tumblr.com/59aee1e94d0a7c9c2ba64f0015256c63/tumblr_ovstwl5t4A1qzmm07o3_1280.jpg',
  'https://scontent-lax3-2.cdninstagram.com/vp/c808fe9a8366c7bbda5c90c9aa0623d2/5C38582C/t51.2885-15/e35/s480x480/40024905_550601878727249_2923046708185996241_n.jpg',
  'https://scontent-cdg.cdninstagram.com/vp/2961f0ca0028239691cea8f0742afb3c/5C3C856B/t51.2885-15/e35/41895310_325084411592454_7518052944600354059_n.jpg',
  'https://i.pinimg.com/originals/6b/7b/0f/6b7b0fd07e7706e76045c1c1c0089702.jpg'
];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setStatus('online');
  client.user
    .setActivity('<>help', {
      type: 'PLAYING'
    })
    .then(presence =>
      console.log(
        `Activity set to ${presence.game ? presence.game.name : 'none'}`
      )
    )
    .catch(console.error);
});

client.on('message', msg => {
  if (!msg.guild) {   return; }
  var rand = Math.floor(Math.random() * images.length);
  var randomImage = images[rand];
  var hToUser = hToUser;
  if (msg.content.startsWith(prefix + 'hug')) {
    const embed = new Discord.RichEmbed()
      .setAuthor(client.user.username.toString())
      .setDescription(
        msg.author.toString() + ' Has Hugged ' + msg.mentions.members.first()
      )
      .setColor('#00cc00')
      .setImage(randomImage);
    if (msg.content.includes(msg.author)) {
      msg.delete();
      return msg.reply(
        'I Am Sorry But You Cannot Hug Yourself, But I can Always Hug You!'
      );
    }
    if (msg.mentions.members.size === 0) {
      msg.delete();
      return msg.reply('Please mention a user to hug them.');
    }
    if (msg.mentions.members.size !== 0) {
      msg.delete();
      return msg.channel.send({ embed });
    }
  }
});
client.on('message', msg => {
  if (!msg.guild) {   return; }
  if (msg.content === prefix + 'scream') {
    msg.delete();
    if (msg.member.voiceChannel) {
      var voiceChannel = msg.member.voiceChannel;

      voiceChannel
        .join()
        .then(connection => {
          const dispatcher = connection.playFile('./Soundbites/Scream.mp3');
          dispatcher.on('end', end => {
            voiceChannel.leave();
            console.log(`${da} ${msg.author.tag} Screamed Succesfully!`);
          });
        })
        .catch(err => console.log(err));
    } else {
      return msg.reply('Please join a voice channel first.');
    }
  }
});
client.on('message', msg => {
  if (!msg.guild) {   return; }
  if (msg.content === config.prefix + 'help') {
    msg.channel.send(
      'Here is a list of avalable commands \n `<>help` you will get this message!\n `<>hug [user]` -hug another user! \n `<>scream` - Very obvious what this one does.\n`<>pma` -Get your daily dose of PMA!\n`<>quote` -Get a random quote from JackSepticeye\n`<>> [message]` -Chat with me using CleverBot AI (Not Yet Working)\n `<>rps` - play rock paper scissors. \nAnd one last thing NEVER TALK ABOUT SEPTIPLIER EVER.'
    );
  }
});

client.on('message', msg => {
  if (!msg.guild) {   return; }
  let command = msg.content.slice(prefix.length);
  if (command === 'pma') {
    msg.reply(
      '```Whatever you go through on a given day, another day will come that will be better :)\n-jacksepticeye, 2018```'
    );
  }
});

client.on('message', msg => {
  if (!msg.guild) {   return; }
  if (msg.content === config.prefix + 'quote') {
    quotes = require('./quotes.json');
    quote = quotes.quotes;
    var rand = Math.floor(Math.random() * quote.length);
    var randomQuote = quote[rand];
    msg.channel.send(randomQuote).catch(console.error);
  }
  if (
    msg.content === config.prefix + '' ||
    msg.content.toLowerCase().startsWith(config.prefix + ' ')
  ) {
    msg.delete();
    msg.reply('Please specify a command!');
  }
  if (msg.content === '<>>') {
    msg.reply('Chat Bot AI is not yet working!');
    console.log(`${d} \n ${msg.author.tag} tried to use CleverBot AI`);
  }
});
 client.on('message', msg => {
   if (!msg.guild) {   return; }
  if (
    msg.content.toLowerCase().startsWith(('hi' || 'hello') + ' ' + ('jack' || 'sean'))
  ) {
    msg.channel.send(`Hello ${msg.author}!`);
    console.log(`${d} ${msg.author.tag} said ${msg.content}`);
  }
  if (msg.content.toLowerCase() === 's' + config.prefix + 'jack') {
    const embed = {
      color: 6797326,
      image: {},
      author: {
        name: client.user.username,
        url: '',
        icon_url: client.user.displayAvatarURL
      },
      fields: [
        {
          name: 'Normally',
          value: '`12:00 PM EST` - Daily \n `3:00 PM EST` - Daily'
        },
        {
          name: 'While On Tour',
          value: '`12:00 PM EST` - Daily'
        }
      ]
    };
    msg.channel.send('This Is Jacks Normal Schedule', { embed })
    .catch(err => console.log(err));
  }
});
client.on('message', msg => {
  if (!msg.guild) { return; }
  if (msg.content.toLowerCase().startsWith(config.prefix+'rps')) {
    const rps = config.rps;
    var rand = Math.floor(Math.random() * rps.length);
    var randomRPS = rps[rand];
    let cmd = config.prefix+'rps ';
    var bchoice = randomRPS.toString();
    let iinput = msg.content.slice(cmd.length);
    let input = iinput.toLowerCase();
    let wrps = '';
    function choices() {
      console.log(`Me: ${bchoice}. \n${msg.author.tag}: ${input}`);
    }
    const mrps = {
      color: 6797326,
      fields: [{
          name: 'Your Choice',
          value: iinput
        },
        {
          name: 'My Choice',
          value: bchoice
        },
        {
          name: 'Winner',
          value: 'bla'
        }
      ]
    };
    if (["rock", "paper", "scissors"].includes(input)) {
      bchoice = randomRPS.toString();
      if (bchoice.toLowerCase() === input) {
        mrps.fields[2] = {name: 'Winner', value: `It's A Draw! Everyone Wins!`};
        return msg.channel.send({embed: mrps});
      } else {
        if (input === 'rock') {
          if (bchoice === 'Paper') {
            mrps.fields[2] = {name: 'Winner', value: `${client.user} Wins!`};
            return msg.channel.send({ embed: mrps });
          } else {
            mrps.fields[2] = {name: 'Winner', value: `${msg.author} Wins!`};
            return msg.channel.send({ embed: mrps });
          }
        }
        if (input === 'paper') {
          if (bchoice === 'Scissors') {
            mrps.fields[2] = {name: 'Winner', value: `${client.user} Wins!`};
            return msg.channel.send({ embed: mrps });
          } else {
            mrps.fields[2] = {name: 'Winner', value: `${msg.author} Wins!`};
            return msg.channel.send({ embed: mrps });
          }
        }
        if (input === 'scissors') {
          if (bchoice === 'Rock') {
            mrps.fields[2] = {name: 'Winner', value: `${client.user} Wins!`};
            msg.channel.send({ embed: mrps });
          } else {
            mrps.fields[2] = {name: 'Winner', value: `${msg.author} Wins!`};
            msg.channel.send({embed: mrps});
          }
        }
      }
    } else {
      msg.reply('To play Rock, Paper, Scissor, Please use this format\n `<>rps <choice>`');
    }
  if (msg.content === '<>rps test') {
    if (msg.author.id.toString() === config.ownerId) {
      wrps = 'test WON!!!!!';
      mrps.fields[2] = {name: 'Winner', value: `${msg.author} Wins!`};
      msg.channel.send(wrps);
      msg.channel.send(`input = |${input}| bot choice = |${bchoice}| winner = |${wrps}|`);
      msg.channel.send({embed: mrps})
      .catch(err => console.log(err));
    } else {
      msg.channel.send('This Command Is For Testing Purposess Only Therefor Only the Bot Owner Can Use This Command');
      return;
    }
    }
  }
  if (msg.content === 'test') {
    if(msg.author.id.toString() === config.ownerId){
      let input = msg.content;
      msg.delete();
      msg.reply(input);
    } else {return;}
  }
  if (msg.content.toLowerCase() === 'titty') {
    msg.channel.send('Sprinkles!');
  }
  if (msg.content.toLowerCase() === 'septiplier') {
    msg.delete();
    msg.reply('NEVER TALK ABOUT SETPIPLIER!');
  }
  
});


client.login(config.token);
