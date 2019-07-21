function getMiddle(s)
{
  //Code goes here!  
  if(s.length === 1) return s
  if(s.length%2 === 0) return s.split('').splice(s.length/2-1, 2).join('')
  if(s.length%2 !== 0) return s.split('').splice(Math.floor(s.length/2), 1).join('')
}

Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});