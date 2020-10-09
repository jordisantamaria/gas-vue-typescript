function onOpen() {
  var ui = SlidesApp.getUi();


  const menu = ui.createMenu('vue app');

  menu.addItem('Start Home', 'startHome').addItem('Start About', 'startAbout')
  .addToUi();
}

function startHome() {
  var htmlOutput = HtmlService.createTemplateFromFile('home.html').evaluate();

  htmlOutput.setTitle('Vue App');//タイトルはHTMLに記載できない。
  SlidesApp.getUi().showSidebar(htmlOutput);
}

function startAbout() {
  var htmlOutput = HtmlService.createTemplateFromFile('about.html').evaluate();

  htmlOutput.setTitle('Vue App');//タイトルはHTMLに記載できない。
  SlidesApp.getUi().showSidebar(htmlOutput);
}
