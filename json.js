function submitform() {
  var j= {
    basics: {
      name:document.getElementById('jname').value,
      label:document.getElementById('jlabel').value,
      email:document.getElementById('jemail').value,
      phone:document.getElementById('jphone').value,
      website:document.getElementById('jwebsite').value,
      summary:document.getElementById('jsummary').value
    }
  };
  var myJSON = JSON.stringify(j);
  document.write("<p>"+myJSON+"</p>");
}
