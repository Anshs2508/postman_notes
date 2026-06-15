//test the type of any part of the response
/*THE EXAMPLE STRUCTURE:
{
"id":1,
"name":"john",
"phone":"1234567890",
"courses":["java", "selenium"]
}
*/

//THE TESTING CODE:
const jsonData=pm.response.json();
pm.test("test data type of the response", () =>
  {
    pm.expect(jsonData).to.be.an("object");
    pm.expect(jsonData.name).to.be.an("string");
    pm.expect(jsonData.id).to.be.an("number");
    pm.expect(jsonData.courses).to.be.an("array");
  }
);        
