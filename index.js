const Discord = require('discord.js');
const bot = new Discord.Client();
const ping = require('minecraft-server-util');

const token ='NzI2NzIwNDk2Mjg0MDc0MDM0.Xvhgnw.j7s_bGwvlZGyAmjDg5FUQ_b67s0';
//login

const PREFIX = "!";
const IP = 'chuchu.catcatlog.com';
const mod_name = "FTB Presents Direwolf20 1.12";

bot.on('ready',() =>{
	console.log('Bot is online');
})

bot.on('message', message =>{
	let args = message.content
	if (args.indexOf(PREFIX) === 0 && message.channel.id ==='716230351244099645'){ //726726704810426412
		let args = message.content.substring(1).split(" ");
		switch(args[0]){
			case 'gg':
				message.react(message.guild.emojis.cache.get("710813592190058587")); //726746888736342047
				break;
			case 'yt':
				message.channel.send('https://www.youtube.com/channel/UCQT0wVzYbLJ4V0mzogIAJkA/')
				break;
			/*
			case 'info' :
				if (args[1] == "server") {
					message.channel.send("伺服器IP: "+ IP);
				}
				break;
			*/
			case 'ip' :
				ping('chuchu.catcatlog.com',25565,(error,response)=>{
					if (error) throw error ;
					const embed = new Discord.MessageEmbed()
						.setTitle('模組伺服器')
						.setColor(0xff0000)
						.addField('伺服主',message.author.username,true)
						.addField('IP',response.host,true)
						.addField('版本',response.version,true)
						.addField('模組包',mod_name)
						.addField('在線人數:',response.onlinePlayers + "/" + response.maxPlayers)
						.setThumbnail(message.author.displayAvatarURL())
						.setFooter("善待我的電腦！");
					//message.channel.send(embed); 
				message.author.send(embed);
				});
				message.delete();
				break;
		}	
	}
})

bot.login(token);

