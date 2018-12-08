document.getElementById('file').onchange = function () {

  var file = this.files[0];
  sumofnums = 0;
  var reader = new FileReader();
  reader.onload = function (progressEvent) {
    var lines = this.result.split('\n');
    for (var line = 0; line < lines.length; line++) {
      sumofnums += parseInt(lines[line]);
      console.log(lines[line]);
      document.getElementById("sum").innerHTML = sumofnums;
    }
  };
  reader.readAsText(file);
};