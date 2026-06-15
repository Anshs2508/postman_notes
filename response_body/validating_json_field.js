//validating JSON Fields in Response
/*THE EXAMPLE STRUCTURE:
{
"id":1,
"name":"john",
"location":"india",
"phone":"1234567890",
"courses":["java", "selenium"]
}
*/

//THE TESTING CODE:
pm.test("Value of location field in India", () =>
  {
    var jsonData=pm.response.json();
    pm.expect(jsonData.id).to.eql(1);
    pm.expect(jsonData.name).to.eql("john");
    pm.expect(jsonData.location).to.eql("india");
    pm.expect(jsonData.phone).to.eql("1234567890");
    pm.expect(jsonData.courses[0]).to.eql("java");
    pm.expect(jsonData.courses[1]).to.eql("selenium");
  }  
);
