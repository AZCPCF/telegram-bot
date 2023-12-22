// function calculator(ctx) {
//     const expression = ctx.message.text;
//     ctx.reply('salam')
//     try {
//         // Evaluate the mathematical expression
//         const result = eval(expression);

//         // Reply with the result
//         ctx.reply(`Result: ${result}`);
//     } catch (error) {
//         // Handle errors (e.g., invalid expressions)
//         ctx.reply('Invalid expression. Please enter a valid mathematical expression.');
//     }
// }

// module.exports = {
//     calculator
// };
// botFunctions.js

function handleStartCommand(ctx) {
    ctx.session = {}; // Reset the session
    ctx.reply('Welcome to the Calculator Bot! Enter a mathematical expression to calculate.');
}

function handleRestartCommand(ctx) {
    ctx.session = {}; // Reset the session
    ctx.reply('Conversation restarted. Enter a mathematical expression to calculate.');
}

function handleTextMessage(ctx) {
    const expression = ctx.message.text;

    try {
        // Evaluate the mathematical expression
        const result = eval(expression);

        // Reply with the result
        ctx.reply(`Result: ${result}`);
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        ctx.reply('Invalid expression. Please enter a valid mathematical expression.');
    }
}

module.exports = {
    handleStartCommand,
    handleRestartCommand,
    handleTextMessage,
};
