/* eslint-disable no-prototype-builtins */
const src = '/typo3conf/ext/ku_prototype/Resources/Public/Icons/Bootstrap-icons/bootstrap-icons.json';

CKEDITOR.dialog.add('bootstrapiconsDialog', function (editor) {

  // const getIcons = async () => {
  //   let json = await fetch(src)
  //   let data = await json.json();
  //   let result = [];
  //   for (const [key, value] of Object.entries(data)) {
  //     var icon = key;
  //     result.push('<a href="#" aria-label="' + icon + '"><span class="bi-' + icon + '" aria-hidden="true"></span><div class="icon-label">' + icon + '</div></a>');
  //   }
  //   return result.join('');

  // }

  // const loadIcons = async () => {
  //   let icons = await getIcons();
  //   console.log(icons);
  //   return icons;
  // }

  return {
    title: 'Bootstrap Icons',
    minWidth: 500,
    minHeight: 400,
    resizable: true,
    contents: [{
      id: 'bootstrap-icons',
      label: 'Add icon',
      elements: [{
          type: 'text',
          id: 'myCustomField',
          label: 'Inputfelt',
          'default': 'Placeholdertekst'
        },
        {
          type: 'html',
          id: 'bootstrap-icons-list',
          html: '<div id="bi-icons" class="bootstrap-icons"></div>',
          onLoad: function () {
            const getIcons = async () => {
              let json = await fetch(src)
              let data = await json.json();
              let result = [];
              for (const [key, value] of Object.entries(data)) {
                var icon = key;
                result.push('<a href="#" aria-label="' + icon + '"><span class="bi-' + icon + '" aria-hidden="true"></span><div class="icon-label">' + icon + '</div></a>');
              }
              return result.join('');

            }

            const loadIcons = async () => {
              let icons = await getIcons();
              console.log(icons);
              return icons;
            }
            console.log(this);
          },
        }
      ]
    }],

    onOk: function () {

    },
  };

});
