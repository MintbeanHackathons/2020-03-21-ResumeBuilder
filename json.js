function submitform() {
  var name = document.getElementById('jname').value;
  var label = document.getElementById('jlabel').value;
  var j= {
    basics: {
      name:this.document.getElementById('jname').value,
      label:document.getElementById('jlabel').value
    }
  };
  var myJSON = JSON.stringify(j);
  document.write("<p>"+myJSON+"</p>");


}
