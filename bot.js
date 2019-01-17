client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: https://discord.gg/SSagmbF:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })
