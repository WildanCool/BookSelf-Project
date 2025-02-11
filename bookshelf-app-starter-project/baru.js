// function buatElementBuku(book) {
//   const container = book.isComplete
//     ? document.getElementById("completeBookList")
//     : document.getElementById("incompleteBookList");

//   const bookItem = document.createElement("div");
//   bookItem.setAttribute("data-bookid", book.id);
//   bookItem.setAttribute("data-testid", "bookItem");

//   const titleItem = document.createElement("h3");
//   titleItem.setAttribute("data-testid", "bookItemTitle");
//   titleItem.innerText = book.judul;

//   const authorItem = document.createElement("p");
//   authorItem.setAttribute("data-testid", "bookItemAuthor");
//   authorItem.innerText = `Penulis: ${book.penulis}`;

//   const yearItem = document.createElement("p");
//   yearItem.setAttribute("data-testid", "bookItemYear");
//   yearItem.innerText = `Tahun: ${book.tahun}`;

//   const buttonContainer = document.createElement("div");

//   const completeButton = document.createElement("button");
//   completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
//   completeButton.innerText = book.isComplete
//     ? "Belum dibaca"
//     : "Selesai dibaca";

//   completeButton.addEventListener("click", function () {
//     if (book.isComplete) {
//       incompleteBooks.push({ ...book, isComplete: false });
//       completeBooks = completeBooks.filter((b) => b.id !== book.id);
//     } else {
//       completeBooks.push({ ...book, isComplete: true });
//       incompleteBooks = incompleteBooks.filter((b) => b.id !== book.id);
//     }

//     saveBooks();
//     renderBooks();
//   });

//   const deleteButton = document.createElement("button");
//   deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
//   deleteButton.innerText = "Hapus Buku";
//   deleteButton.addEventListener("click", function () {
//     if (book.isComplete) {
//       completeBooks = completeBooks.filter((b) => b.id !== book.id);
//     } else {
//       incompleteBooks = incompleteBooks.filter((b) => b.id !== book.id);
//     }

//     saveBooks();
//     renderBooks();
//   });

//   const editButton = document.createElement("button");
//   editButton.setAttribute("data-testid", "bookItemEditButton");
//   editButton.innerText = "Edit Buku";

//   buttonContainer.append(completeButton, deleteButton, editButton);
//   bookItem.append(titleItem, authorItem, yearItem, buttonContainer);
//   container.append(bookItem);
// }
