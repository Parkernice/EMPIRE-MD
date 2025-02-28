//---------------------------------------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author       : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------------------------------------
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//═════[Don't Change Variables]════════\\

global.alive_img = "📞 𝙰𝚞𝚝𝚘 𝙲𝚊𝚕𝚕 𝚁𝚎𝚓𝚎𝚌𝚝 𝙼𝚘𝚍𝚎 𝙰𝚌𝚝𝚒𝚟𝚎.📵 𝙽𝚘 𝙲𝚊𝚕𝚕𝚜 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!";
global.caption = "𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑";
global.channelUrl = "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.botname = "𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳";
global.devs = "2348078582627" // Developer Contact
global.devsname = "𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑";
global.apikey = "_0x5aff35,_0x1876stqr";

module.exports = {
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    ANTICALL: process.env.ANTICALL || "false",
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    ANTILINK: process.env.ANTILINK || "false",
    ANTIDELETE: process.env.ANTIDELETE || "true",
    ANTIDELETE_PM: process.env.ANTIDELETE_PM || "false",
    AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "💚",
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "false",
    MODE: process.env.MODE || "private",
    OWNER_NAME: process.env.OWNER_NAME || "𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2348144250768",
    PREFIX: process.env.PREFIX || ".",
    SESSION_ID: process.env.SESSION_ID || "bUATWBBa#xxWoF_6PtaYoFCmNK3cmAewh61-P7B7jTiuPKD5n6YM"
};
