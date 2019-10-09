const html = `
<div>
  Centered
</div>
`

const css = `
div {
  width: 200px;
  height: 200px;
  background-color: lightpink;
  display: grid;
  place-items: center;
}
`

const js = `
`

document.querySelector('code#html textarea').textContent = html.trim()
document.querySelector('code#css textarea').textContent = css.trim()
document.querySelector('code#js textarea').textContent = js.trim()
