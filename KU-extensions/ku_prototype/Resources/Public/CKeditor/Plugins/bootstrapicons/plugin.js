// Plugin to display Bootstrap Icons: https://icons.getbootstrap.com/
// Written by Nanna Ellegaard, 2021.

CKEDITOR.plugins.add('bootstrapicons', {
  icons: 'smiley',
  lang: 'en, da',
  init: function (editor) {
    let lang = editor.lang.bootstrapicons;
    editor.addCommand('bootstrapIcons', new CKEDITOR.dialogCommand('bootstrapiconsDialog', {
      allowedContent: 'span(!bi-*)',
    }));
    editor.ui.addButton('Smiley', {
      label: lang.buttonTitle,
      command: 'bootstrapIcons',
      toolbar: 'insert',
      icon: this.path + 'icons/smiley.png'
    });
    CKEDITOR.dialog.add('bootstrapiconsDialog', this.path + 'dialogs/bootstrapicons.js');
    CKEDITOR.document.appendStyleSheet('/typo3conf/ext/ku_prototype/Resources/Public/Icons/Bootstrap-icons/bootstrap-icons.css');
    CKEDITOR.document.appendStyleSheet(this.path + 'css/bi-editor.css');
    CKEDITOR.dtd.$removeEmpty.span = 0;
  }
});