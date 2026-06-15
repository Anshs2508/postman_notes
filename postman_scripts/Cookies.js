//test if cookie is present in the response:
pm.test("cookies 'language' is present", () =>
{
    pm.expect(pm.cookies.has('language')).to.be.true;
}
);

//test for a perticular cookie:
pm.test("cookie language has value 1", () =>
{
    pm.expect(pm.cookies.get('language')).to.be.eql(en-gb);
}
);