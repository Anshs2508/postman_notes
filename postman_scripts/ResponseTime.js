//test for the response time to be within specified range:
pm.test("Response time is less than 200ms", () =>
{
    pm.expect(pm.responseTime).to.be.below(200);
}
);