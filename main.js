let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element
  console.log("elemtent is "+element)
  console.log("usersWord is "+ usersWord)
}


function handleSubmit() {
  updateWord()
  let newListItem = document.createElement('li')
  newListItem.innerText = usersWord
  console.log(usersWord)
  /* compare remainder to 0 to see if even or not */
  if(usersWord.length % 2 === 0) {
      /*put word in even lists*/
      evenList.appendChild(newListItem)
    } else {
      /*put word in odd list*/
      oddList.appendChild(newListItem)
      }

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}