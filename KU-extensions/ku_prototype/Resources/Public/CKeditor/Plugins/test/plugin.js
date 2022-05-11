CKEDITOR.plugins.add( 'test', {
    icons: 'skull',
    init: function( editor ) {
        editor.addCommand( 'testPlugin', {
            exec: function( editor ) {
                alert('KU test!');
            }
        });
        editor.ui.addButton( 'Skull', {
            label: 'Test plugin',
            command: 'testPlugin',
            toolbar: 'insert'
        });
    }
});