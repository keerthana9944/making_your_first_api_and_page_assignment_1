const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });

    let dayMessage;
    switch (dayOfWeek) {
        case 'Monday':
            dayMessage = "Happy Monday! Start your week with energy!";
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = "Have a wonderful day!";
    }

    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});