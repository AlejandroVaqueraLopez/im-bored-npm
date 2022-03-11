const {activityList} = require("./activities/activities.js");
let picker = () => {
	let picked = activityList[Math.floor(Math.random() * activityList.length)];
	console.group("Todays activity =>");
	console.log(`Activity: ${picked.activity}`);
	console.log(`Type: ${picked.type}`);
	console.log(`Participants: ${picked.participants}`);
	console.groupEnd();
}
module.exports = {picker};
