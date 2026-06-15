//check that a response header is present:
pm.test("Content-Type header is present", () =>
{
    pm.response.to.have.header("Content-Type");
}
);

//test for response header having a perticular value:
pm.test("Content-Type header is application/json", () =>
{
    pm.expect(pm.response.header.get('Content-Type')).to.eql('application/json;charset=UTF-8');
}
);