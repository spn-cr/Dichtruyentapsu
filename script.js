fetch("data/truyen.json")
  .then(response => response.json())
  .then(data => {
    const storyList = document.getElementById("story-list");

    data.truyen.forEach(truyen => {
      const div = document.createElement("div");
      div.className = "story";

      div.innerHTML = `
        <h2>
          <a href="truyen.html?id=${truyen.id}">
            ${truyen.ten}
          </a>
        </h2>
        <p>${truyen.gioithieu}</p>
        <p>Số chương: ${truyen.chuong.length}</p>
      `;

      storyList.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Lỗi khi đọc truyen.json:", error);
  });
