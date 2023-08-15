let gambar = [
  ["https://www.w3schools.com/w3images/la.jpg", "Los Angeles", "aaaa"],
  ["https://www.w3schools.com/w3images/ny.jpg", "New York", "bbbb"],
  ["https://www.w3schools.com/w3images/chicago.jpg", `Chicago`, "cccc"],
];

carousel = async (array) => {
  while (true) {
    for (i of gambar) {
      await new Promise((resolve) => setTimeout(3000, resolve));
      let city = document.getElementById("city-location");
      city.innerHTML = i[1];
      let massage = document.getElementById("short-massage");
      massage.innerHTML = i[2];
      let img = document.getElementById(`imago`);
      img.src = i[0];
      const xhr = new XMLHttpRequest();
      const url = `file:///D:/Programming/JCWD%20Purwadhika/Modul%202%20Front%20End/day%2017%20advanced%20CSS/theBand.html`;
      xhr = 
    }
  }
};

window.onload = carousel(gambar);
