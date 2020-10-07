function onOpen() {
  var ui = SlidesApp.getUi();


  const menu = ui.createMenu('vue app');

  menu.addItem('ホームメニュー', 'startApp')
  .addToUi();
}

function startApp() {
  var htmlOutput = HtmlService.createTemplateFromFile('index.html').evaluate();

  htmlOutput.setTitle('Vue App');//タイトルはHTMLに記載できない。
  SlidesApp.getUi().showSidebar(htmlOutput);
}
