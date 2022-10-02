//Mettre le code JavaScript lié à la page photographer.html
et photographersArray = [];
  async function fetchPhotographers() {
    await fetch("./data/photographers.json")
      .then((res) => res.json())
      // eslint-disable-next-line no-return-assign
      .then((data) => (photographersArray = data.photographers));
    console.log(photographersArray);
  }

  fetchPhotographers();


  const photographers = photographersArray;
  console.log(photographers);