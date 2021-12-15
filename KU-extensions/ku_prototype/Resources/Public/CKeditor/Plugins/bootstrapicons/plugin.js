CKEDITOR.plugins.add('bootstrapicons', {
  icons: 'smiley',
  init: function (editor) {
    editor.addCommand('bootstrapIcons', new CKEDITOR.dialogCommand('bootstrapiconsDialog', {
      allowedContent: 'span(!bi-*)',
    }));
    editor.ui.addButton('Smiley', {
      label: 'Bootstrap icons',
      command: 'bootstrapIcons',
      toolbar: 'insert',
      icon: this.path + 'icons/smiley.png'
    });
    CKEDITOR.dialog.add('bootstrapiconsDialog', this.path + 'dialogs/bootstrapicons.js');
    CKEDITOR.document.appendStyleSheet('/typo3conf/ext/ku_prototype/Resources/Public/Icons/Bootstrap-icons/bootstrap-icons.css');
    CKEDITOR.dtd.$removeEmpty.span = 0;
  }
});