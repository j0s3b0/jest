function login(user){
  var flag = null;
  var student = ["jose", "omar","maria","jesus"];
    for (var i = 0; i < student.length; i++) {
      if(student[i] == user){
        flag = true;
        break;

      }else if (student[i] != user) {
        flag = false;
        continue;
      }
    }
    return flag;

}
module.exports = login;
