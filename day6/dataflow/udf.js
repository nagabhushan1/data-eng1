function transform(line) {
  var values = line.split(","); // Split the input line by commas (CSV format)

  // Check if it's the header row (first line) and skip it
  if (values[0] === "EmployeeID") {
    return null; // Skip processing the header row
  }

  // Create an object mapping the values to the BigQuery schema
  var obj = new Object();
  obj.EmployeeID = parseInt(values[0]); // Convert to integer
  obj.FirstName = values[1];
  obj.LastName = values[2];
  obj.Department = values[3];
  obj.Position = values[4];
  obj.Salary = parseInt(values[5]); // Convert to integer
  obj.JoiningDate = values[6]; // Date as a string (ISO format YYYY-MM-DD)
  obj.Country = values[7];
  // Convert the object to a JSON string
  var jsonString = JSON.stringify(obj);
  return jsonString;
}
