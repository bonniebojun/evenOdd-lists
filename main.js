let usersWord = "usersWord.length"


function updateWord(element) {
  usersWord = element
  console.log("elemtent is "+element)
  console.log("usersWord is "+ usersWord)
}


function handleSubmit() {
  // updateWord()
  let usersWord = document.getElementById("Word")

  let oddList = document.getElementById("odd")
  let evenList = document.getElementById("even")

  let newListItem = document.createElement('li')
  console.log(newListItem)
  newListItem.innerText = usersWord
  console.log('userword')
  
  /* compare remainder to 0 to see if even or not */
  if (usersWord % 2 === 0) {
    /*put word in even lists*/
    evenList.appendChild(newListItem)
  } else {
    /*put word in odd list*/
    oddList.appendChild(newListItem)
  }

  usersWord = ""
  document.getElementById("Even or Odd?")
}