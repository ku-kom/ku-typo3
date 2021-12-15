/* eslint-disable no-prototype-builtins */
const src = '/typo3conf/ext/ku_prototype/Resources/Public/Icons/Bootstrap-icons/bootstrap-icons.json';

let icons = '';

CKEDITOR.dialog.add('bootstrapiconsDialog', function (editor) {

  // const getData = async () => {
  //   try {
  //     const res = await fetch(src);
  //     if (!res.ok) {
  //       throw new Error('Data not fetched!');
  //     }
  //     const data = await res.json();
  //     var arr = Object.keys(data).map(function (k) {
  //       return data[k]
  //     });
  //     console.log;
  //     return arr;
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  function readJson() {
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        var result = [];
        for (var i in json) {
          result.push([i, json[i]]);
        }
        console.log(result);
        return result;
      })
      .catch(function () {

      })
  }


  // function parseData(data) {
  //   Object.entries(data).forEach(([key, value]) => {
  //     icons += '<a href="#" class="bi-' + key + '">' + key + '</a>';
  //   })
  //   console.log(icons);
  //   return icons;
  // }
  // var icons = readJson();
  // console.log(icons)

  function faIcons() {
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        var result = [];
        for (const [key, value] of Object.entries(json)) {
          var icon = key;
          result.push('<a href="#" aria-label="' + icon + '"><span class="bi-' + icon + '" aria-hidden="true"></span><div class="icon-label">' + icon + '</div></a>');
        }
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log(error)
      });
  }


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
          'default': 'Placeholdertekst.'
        },
        {
          type: 'html',
          id: 'bootstrap-icons-list',
          html: '<div class="bootstrap-icons">' + faIcons() + '</div>'
        }
      ]

    }],

    onOk: function () {

    },
  };
});
