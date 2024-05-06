const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="brianmwangi284@gmail.com"
global.location="Nairobi,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Mwas284/mwas-md-tec";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/488eb8d083c3361a543b0.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254740628296" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740628296";

//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = true


//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/349877f57acf0e38db29f.mp4`
//👇 Alive message
//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254740628296";

global.AUTO_SEEN_STATUS = true
//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254740628296";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254740628296,254740628296";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.duslang.co.ke/";

module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: dus Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "¯\(°_o)/¯ 𐒄Ⱳ𐤠Ⳝ☩𐒄Ɗ☩ƁΘƬ☩😌 ¯\(o_°)/¯" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ dus 』```", //*『sᴜʙsᴄʀɪʙᴇ • dus』*\n https://whatsapp.com"),
 
  author : process.env.PACK_AUTHER|| "𝖒𝖜𝖆𝖘 𝖒𝖉 𝖇𝖔𝖙 😌",
  packname: process.env.PACK_NAME || "📍",
  botname : process.env.BOT_NAME  || "▄︻デʍաǟֆ ʍɖ ɮօȶ 😌═══━一",
  ownername:process.env.OWNER_NAME|| "¯\(°_o)/¯ 𐒄Ⱳ𐤠Ⳝ☩𐒄Ɗ☩ƁΘƬ☩😌 ¯\(o_°)/¯",

  sessionName:process.env.SESSION_ID || "",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "𝖒𝖜𝖆𝖘 𝖒𝖉 𝖇𝖔𝖙 😌",

//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = true
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
