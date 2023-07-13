const { ThreadsAPI } = require("threads-api");
const fs = require("fs");
require("dotenv").config();

const threadsAPI = new ThreadsAPI({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

const getRandomText = (fileName) => {
  const threadList = fs.readFileSync(fileName, "utf8").split("\n");
  const randomIndex = Math.floor(Math.random() * threadList.length);

  return threadList[randomIndex];
};

const post = async () => {
  try {
    const text = getRandomText(process.env.POST_PATH || "post.txt");

    await threadsAPI.publish({
      text: text,
    });

    console.log(`[POSTED] ${text}`);
  } catch (error) {
    console.error(`[ERROR] ${error}`);
  }
};

const reply = async (url) => {
  try {
    const text = getRandomText(process.env.REPLY_PATH || "reply.txt");
    const threadsPostID = await threadsAPI.getPostIDfromURL(url); // or use `getPostIDfromThreadID`

    await threadsAPI.publish({
      text: text,
      parentPostID: threadsPostID,
    });

    console.log(`[REPLY] ${text}`);
  } catch (error) {
    console.error(`[ERROR] ${error}`);
  }
};

const main = async () => {
  const arg = process.argv[2]?.toLowerCase(); // Mengubah argumen menjadi lowercase
  const additionalArg = process.argv[3]; // Mengambil argumen tambahan

  const isValidURL = (url) => {
    const urlRegex = /^https:\/\/www\.threads\.net\/t\/\w+/i; // Ekspresi reguler untuk verifikasi URL
    return urlRegex.test(url);
  };

  const processLoop = async (action) => {
    while (true) {
      if (arg === "reply" && !isValidURL(additionalArg)) {
       console.error(
          "Invalid URL format. Please provide a valid URL starting with 'https://www.threads.net/t/'.\n" +
          "Example: npm start reply https://www.threads.net/t/CugF-EjhQ3r\n"
       );
        break;
      }

      await action(additionalArg); // Mengirimkan argumen tambahan ke fungsi
      await new Promise((resolve) =>
        setTimeout(resolve, (parseInt(process.env.INTERVAL) || 60) * 1000)
      );
    }
  };

  console.log("Starting...");
  console.log(`############################################################`);
  console.log(`#                                                          #`);
  console.log(`#          ███████╗ █████╗  ██████╗██╗  ██╗██╗   ██╗       #`);
  console.log(`#          ╚══███╔╝██╔══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝       #`);
  console.log(`#            ███╔╝ ███████║██║     █████╔╝  ╚████╔╝        #`);
  console.log(`#           ███╔╝  ██╔══██║██║     ██╔═██╗   ╚██╔╝         #`);
  console.log(`#          ███████╗██║  ██║╚██████╗██║  ██╗   ██║          #`);
  console.log(`#          ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝          #`);
  console.log(`#                                                          #`);
  console.log(`#  Threads BOT Auto Post & Reply (Random Text)             #`);
  console.log(`#  Version: 1.0.0                                          #`);
  console.log(`#                                                          #`);
  console.log(`############################################################`);
  console.log(`Username: @${process.env.USERNAME}`);
  console.log(`Interval: ${process.env.INTERVAL} seconds | Mode: ${arg}`);

  if (arg === "post") {
    processLoop(post).catch((error) => console.error(`[ERROR] ${error}`));
  } else if (arg === "reply") {
    processLoop(reply).catch((error) => console.error(`[ERROR] ${error}`));
  } else {
    console.error("Invalid argument. Please specify 'post' or 'reply'.");
  }
};

main();
