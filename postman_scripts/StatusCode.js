//test for the response status code:
pm.test("Status code is 200", () =>
{
    pm.response.to.have.status(200);
}
);

//test for multiple response status code:
pm.test("Successful POST Request", () =>
{
    pm.expect(pm.response.code).to.be.oneOf([200,201]);    
}
);

//check the status code text:
pm.test("Status code name has String", () =>
{
    pm.response.to.have.status("created");
}
);