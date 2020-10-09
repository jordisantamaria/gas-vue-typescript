function onOpen() {
  var ui = SlidesApp.getUi();


  const menu = ui.createMenu('vue app2');

  menu.addItem('Start App', 'startApp')
  .addToUi();
}

function startApp() {
  var htmlOutput = HtmlService.createTemplateFromFile('index.html').evaluate();

  htmlOutput.setTitle('Vue App');//タイトルはHTMLに記載できない。
  SlidesApp.getUi().showSidebar(htmlOutput);
}
