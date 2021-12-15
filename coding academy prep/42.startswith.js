// 42.Write a function named startsWithS that gets an array of names and returns an array
// of the names that start with S.

str =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos exercitationem dolorem obcaecati ab earum distinctio laborum asperiores! Rem dolores voluptatum soluta velit omnis. Ab, harum quibusdam magni nostrum vel doloremque pariatur aspernatur dolorem quis dolores exercitationem perferendis expedita, inventore ipsam rerum eius? Exercitationem dolorem mollitia quaerat aut, temporibus repellat veniam sapiente laborum debitis culpa maxime, non nesciunt aperiam illo earum odio deserunt. Unde dolorem vero iste officia tempora officiis, set eius autem. Cupiditate libero assumenda aspernatur sit vero asperiores sapiente debitis cumque illo repellat quod velit, delectus facere, non fugiat cum animi hic repudiandae! Omnis veniam velit quis voluptatibus nostrum!'

let letter = 's'
function startsWith(letter, str) {
  strArr = str.split(' ')
  console.log(strArr)
  startWithLetter = []
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].startsWith(letter)) {
      startWithLetter.push(strArr[i])
    }
  }
  return startWithLetter.join(' ')
}

console.log(startsWith(letter, str))
