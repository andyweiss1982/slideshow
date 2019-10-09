
document.addEventListener('DOMContentLoaded', function(){
  const iframe = document.querySelector('main#result > iframe')
  const viewPage = document.querySelector('main#result > a#view-page')
  const htmlEditor = document.querySelector('code#html > textarea.editor')
  const cssEditor = document.querySelector('code#css > textarea.editor')
  const jsEditor = document.querySelector('code#js > textarea.editor')

  function populateIframe(){
    const srcdoc =  `
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>My Code!</title>
                        <style>${cssEditor.value}</style>
                      </head>
                      <body>
                        ${htmlEditor.value}
                        <script>${jsEditor.value}</script>
                      </body>
                    </html>
                    `
    iframe.srcdoc = srcdoc
    const dataUrl = `data:text/html;base64,${btoa(srcdoc)}`
    viewPage.href = dataUrl
  }

  for (let editor of [htmlEditor, cssEditor, jsEditor]){
    editor.addEventListener('input', populateIframe)
  }

  populateIframe()
})


