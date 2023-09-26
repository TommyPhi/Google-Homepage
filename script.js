const jokeList = ['What do you call a fake noodle? An Impasta!', 'What do you call a song about a tortilla? A wrap!', 'What’s Forrest Gump’s password? 1forrest1!', 'What cars do sheep drive? Lamborghinis!', 'How do you make seven even? Take away the s!', 'How does the moon style his hair? Eclipse it!', 'What’s blue and doesn’t weigh much? Light blue!', 'What has four wheels and flies? A garbage truck!', 'How do you organize a space party? You planet!', 'What kind of cheese isn’t yours? Nacho cheese!']

let returnJoke = () => {
  let randNum = Math.floor(Math.random() * 10);
  let joke = jokeList[randNum];
  alert(`${joke}`);
}

let googleSearch = () => {
  event.preventDefault();
  let input = document.getElementById("google-search").value;
  window.location.assign("https://www.google.com/search?q=" + input);
}

let googleImgSearch = () => {
  event.preventDefault();
  let input = document.getElementById("google-img-search").value;
  window.location.assign("https://www.google.com/search?tbm=isch&q=" + input);
}

let advSearch = () => {
  event.preventDefault();
  let allWords = document.getElementById("allWords").value;
  let exactWords = document.getElementById("exactWords").value;
  let anyWords = document.getElementById("anyWords").value;
  let noneWords = document.getElementById("noneWords").value;
  let numbersFrom = document.getElementById("numbersFrom").value;
  let numbersTo = document.getElementById("numbersTo").value;
  let website = document.getElementById("website").value;
  window.location.assign(`https://www.google.com/search?as_q=${allWords}&as_epq=${exactWords}&as_oq=${anyWords}&as_eq=${noneWords}+&as_nlo=${numbersFrom}&as_nhi=${numbersTo}&lr=&cr=&as_qdr=all&as_sitesearch=${website}&as_occt=any&as_filetype=&tbs=&bshm=rimc/1`)
}