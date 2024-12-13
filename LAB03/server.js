// Importing required modules
const connect = require('connect');
const url = require('url');

// Function to handle calculations
function calculate(req, res, next) {
    // Parse the URL to get query parameters
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    // Variable to store the result
    let result;

    // Validate input parameters
    if (!method || isNaN(x) || isNaN(y)) {
        res.end("Error: Missing or invalid parameters. Please check your URL.");
        return;
    }

    // Perform the calculation based on the method parameter
    switch (method) {
        case "add":
            result = `${x} + ${y} = ${x + y}`;
            break;
        case "subtract":
            result = `${x} - ${y} = ${x - y}`;
            break;
        case "multiply":
            result = `${x} * ${y} = ${x * y}`;
            break;
        case "divide":
            if (y === 0) {
                res.end("Error: Cannot divide by zero.");
                return;
            }
            result = `${x} / ${y} = ${x / y}`;
            break;
        default:
            res.end("Error: Unsupported method. Supported methods are add, subtract, multiply, and divide.");
            return;
    }

    // Display the result
    res.end(result);
}

// Create the server using the Connect module
const app = connect();

// Assign the calculate function to the /calculate path
app.use('/calculate', calculate);

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});


// we have to type http://localhost:3000/calculate?method=subtract&x=16&y=4 to get the result working
