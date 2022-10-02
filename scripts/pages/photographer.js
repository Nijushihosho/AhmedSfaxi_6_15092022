//Mettre le code JavaScript lié à la page photographer.html

  async function getData() {
    const response = await fetch("/data/photographers.json");
    await fetch("/data/photographers.json")
    return await response.json();
  }