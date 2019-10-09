document.addEventListener('DOMContentLoaded', function(){
  const main = document.querySelector('main#result')
  const iframe = document.querySelector('main#result > iframe')
  const mainFullScreen = document.querySelector('main#result > i.fullscreen')
  const editors = document.querySelector('aside#editors')
  const html = document.querySelector('code#html')
  const htmlEditor = document.querySelector('code#html > textarea.editor')
  const css = document.querySelector('code#css')
  const cssEditor = document.querySelector('code#css > textarea.editor')
  const js = document.querySelector('code#js')
  const jsEditor = document.querySelector('code#js > textarea.editor')
  const htmlFullScreen = document.querySelector('code#html > i.fullscreen')
  const cssFullScreen = document.querySelector('code#css > i.fullscreen')
  const jsFullScreen = document.querySelector('code#js > i.fullscreen')

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
  }

  for (let editor of [htmlEditor, cssEditor, jsEditor]){
    editor.addEventListener('input', populateIframe)
  }

  mainFullScreen.addEventListener('click', function(){
    if (editors.classList.contains('hidden')){
      editors.classList.remove('hidden')
      mainFullScreen.textContent = 'fullscreen'
    }else{
      editors.classList.add('hidden')
      mainFullScreen.textContent = 'fullscreen_exit'
    }
    main.classList.toggle('full')
  })

  htmlFullScreen.addEventListener('click', function(){
    if (main.classList.contains('hidden')){
      main.classList.remove('hidden')
      htmlFullScreen.textContent = 'fullscreen'
    }else{
      main.classList.add('hidden')
      htmlFullScreen.textContent = 'fullscreen_exit'
    }
    html.classList.toggle('full')
    for (let code of [css, js]) code.classList.toggle('hidden')
  })

  cssFullScreen.addEventListener('click', function(){
    if (main.classList.contains('hidden')){
      main.classList.remove('hidden')
      cssFullScreen.textContent = 'fullscreen'
    }else{
      main.classList.add('hidden')
      cssFullScreen.textContent = 'fullscreen_exit'
    }
    css.classList.toggle('full')
    for (let code of [html, js]) code.classList.toggle('hidden')
  })

  jsFullScreen.addEventListener('click', function(){
    if (main.classList.contains('hidden')){
      main.classList.remove('hidden')
      jsFullScreen.textContent = 'fullscreen'
    }else{
      main.classList.add('hidden')
      jsFullScreen.textContent = 'fullscreen_exit'
    }
    js.classList.toggle('full')
    for (let code of [html, css]) code.classList.toggle('hidden')
  })

  populateIframe()
})


