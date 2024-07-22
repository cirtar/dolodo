// Assuming reactiveGeom is a boolean indicating whether to use reactive geometry
const reactiveGeom = true; // Or false based on your application logic

// Set the expression based on reactiveGeom
const expr = reactiveGeom ? 'datum.datum' : 'datum';

// Example function that uses the expr variable
function processData(data) {
    const processedData = data.map(item => {
        return eval(expr);
    });
    return processedData;
}

// Mock data example
const data = [
    { datum: { value: 10 }, value: 20 },
    { datum: { value: 30 }, value: 40 }
];

// Usage example
const result = processData(data);
console.log(result); // Output will depend on the value of reactiveGeom
