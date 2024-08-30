import fetch from 'node-fetch';
import fs from 'fs';


const getPreviousMondayTimestamp = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();                         // 0 (Sunday) to 6 (Saturday)
    const daysSinceMonday = (dayOfWeek + 6) % 7; 
    const previousMonday = new Date(now.setDate(now.getDate() - daysSinceMonday));
    previousMonday.setHours(0, 0, 0, 0);                    // Start of the day
    return Math.floor(previousMonday.getTime() / 1000);     // Convert to seconds
};


const updateScoreboard = async () => {
    try {
        const scoreboardFilePath = 'public/scoreboard.json';
        const fileContent = fs.readFileSync(scoreboardFilePath, 'utf8');
        const scoreboard = JSON.parse(fileContent);

        const previousMondayTimestamp = getPreviousMondayTimestamp();

        for (const user of scoreboard.scoreboard) {
            const { codeforce_username, id } = user;

            if (!codeforce_username) {
                console.error(`Missing Codeforces username for user ID ${id}`);
                continue;
            }

            const response = await fetch(`https://codeforces.com/api/user.status?handle=${codeforce_username}`);
            const data = await response.json();

            if (data.status !== 'OK') {
                console.error(`API request failed for user ${codeforce_username}: ${data.status}`);
                continue;
            }

            const problemsSolvedSincePreviousMonday = data.result.filter(submission => {
                return submission.creationTimeSeconds >= previousMondayTimestamp;
            }).length;

            user.Solved = problemsSolvedSincePreviousMonday;
        }

        fs.writeFileSync(scoreboardFilePath, JSON.stringify(scoreboard, null, 2));
    } catch (error) {
        console.error('Error updating scoreboard:', error);
    }
};

setInterval(updateScoreboard, 2*60*1000);

updateScoreboard();
