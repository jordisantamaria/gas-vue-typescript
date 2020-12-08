function onOpen() {
    const ui = SlidesApp.getUi();

    const menu = ui.createMenu('Vue app');

    menu.addItem('Home', 'sideBarHomeShow').addItem('HomeModal', 'modalHomeShow').addToUi();
}

function sideBarHomeShow() {
    const html = HtmlService.createTemplateFromFile('home.html').evaluate();

    html.setTitle('ホームサイドバー'); //タイトルはHTMLに記載できない。
    let content = html.getContent();
    const presentationName = SlidesApp.getActivePresentation().getName();
    content = content.replace('%textEdit%', presentationName);
    content = content.replace('%isFrom%', 'sideBar');
    html.setContent(content);
    SlidesApp.getUi().showSidebar(html);
}

function modalHomeShow() {
    const html = HtmlService.createHtmlOutputFromFile('home.html')
        .setTitle('ホームダイアログ')
        .setWidth(1000)
        .setHeight(450);
    let content = html.getContent();
    const presentationName = SlidesApp.getActivePresentation().getName();
    // SlidesApp.getActivePresentation().getSelection().getCurrentPage().asSlide()
    content = content.replace('%textEdit%', presentationName);
    content = content.replace('%isFrom%', 'modalDialog');
    html.setContent(content);
    SlidesApp.getUi().showModalDialog(html, 'ホームダイアログ');
}

function changeSlideName(name: string) {
    SlidesApp.getActivePresentation().setName(name);
}
