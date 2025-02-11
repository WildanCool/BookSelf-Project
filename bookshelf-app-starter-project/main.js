// const STORAGE_KEY = "BookShelf_APP";

// let completeBooks = [];
// let incompleteBooks = [];
// let isEditing = false; // Menyimpan status apakah sedang dalam mode edit
// let bookToEditId = null; // Menyimpan ID buku yang sedang diedit

// document.addEventListener("DOMContentLoaded", function () {
//   const bookFormSubmit = document.getElementById("bookFormSubmit");
//   bookFormSubmit.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (isEditing) {
//       perbaruiBuku(); // Jika sedang dalam mode edit, panggil fungsi perbarui
//     } else {
//       tambahBuku(); // Jika tidak, tambahkan buku baru
//     }
//   });

//   loadBooks();
//   renderBooks();
// });

// function tambahBuku() {
//   const judul = document.getElementById("bookFormTitle").value;
//   const penulis = document.getElementById("bookFormAuthor").value;
//   const tahun = parseInt(document.getElementById("bookFormYear").value);
//   const isComplete = document.getElementById("bookFormIsComplete").checked;

//   if (!judul || !penulis || isNaN(tahun)) {
//     alert("Pastikan semua data buku telah diisi dengan benar!");
//     return;
//   }

//   const book = { id: generateId(), judul, penulis, tahun, isComplete };
//   isComplete ? completeBooks.push(book) : incompleteBooks.push(book);

//   saveBooks();
//   renderBooks();

//   // Reset form
//   document.getElementById("bookForm").reset();
// }

// function perbaruiBuku() {
//   const updatedJudul = document.getElementById("bookFormTitle").value;
//   const updatedPenulis = document.getElementById("bookFormAuthor").value;
//   const updatedTahun = parseInt(document.getElementById("bookFormYear").value);
//   const updatedIsComplete =
//     document.getElementById("bookFormIsComplete").checked;

//   if (!updatedJudul || !updatedPenulis || isNaN(updatedTahun)) {
//     alert("Pastikan semua data buku telah diisi dengan benar!");
//     return;
//   }

//   // Perbarui buku berdasarkan ID
//   let targetArray = completeBooks.find((b) => b.id === bookToEditId)
//     ? completeBooks
//     : incompleteBooks;

//   targetArray.forEach((b) => {
//     if (b.id === bookToEditId) {
//       b.judul = updatedJudul;
//       b.penulis = updatedPenulis;
//       b.tahun = updatedTahun;
//       b.isComplete = updatedIsComplete;
//     }
//   });

//   // Jika status selesai dibaca berubah, pindahkan buku ke array lain
//   if (updatedIsComplete) {
//     completeBooks.push(...incompleteBooks.filter((b) => b.id === bookToEditId));
//     incompleteBooks = incompleteBooks.filter((b) => b.id !== bookToEditId);
//   } else {
//     incompleteBooks.push(...completeBooks.filter((b) => b.id === bookToEditId));
//     completeBooks = completeBooks.filter((b) => b.id !== bookToEditId);
//   }

//   saveBooks();
//   renderBooks();

//   // Reset form dan kembalikan ke mode tambah
//   document.getElementById("bookForm").reset();
//   document.getElementById("bookFormSubmit").innerText = "Tambah Buku";
//   isEditing = false;
//   bookToEditId = null;
// }

// function generateId() {
//   return +new Date();
// }

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
//   editButton.addEventListener("click", function () {
//     editBuku(book);
//   });

//   buttonContainer.append(completeButton, deleteButton, editButton);
//   bookItem.append(titleItem, authorItem, yearItem, buttonContainer);
//   container.append(bookItem);
// }

// function editBuku(book) {
//   // Isi form dengan data buku yang ingin diedit
//   document.getElementById("bookFormTitle").value = book.judul;
//   document.getElementById("bookFormAuthor").value = book.penulis;
//   document.getElementById("bookFormYear").value = book.tahun;
//   document.getElementById("bookFormIsComplete").checked = book.isComplete;

//   // Ubah status menjadi editing
//   isEditing = true;
//   bookToEditId = book.id;

//   // Ubah teks tombol menjadi 'Perbarui Buku'
//   document.getElementById("bookFormSubmit").innerText = "Perbarui Buku";
// }

// function renderBooks() {
//   renderCompleteBooks();
//   renderIncompleteBooks();
// }

// function renderCompleteBooks() {
//   const completeBookList = document.getElementById("completeBookList");
//   completeBookList.innerHTML = "";
//   for (const book of completeBooks) {
//     buatElementBuku(book);
//   }
// }

// function renderIncompleteBooks() {
//   const incompleteBookList = document.getElementById("incompleteBookList");
//   incompleteBookList.innerHTML = "";
//   for (const book of incompleteBooks) {
//     buatElementBuku(book);
//   }
// }

// function saveBooks() {
//   const data = {
//     completeBooks,
//     incompleteBooks,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }

// function loadBooks() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (data) {
//     completeBooks = data.completeBooks || [];
//     incompleteBooks = data.incompleteBooks || [];
//   }
// }

const STORAGE_KEY = "BookShelf_APP";

let completeBooks = [];
let incompleteBooks = [];
let isEditing = false;
let bookToEditId = null;

document.addEventListener("DOMContentLoaded", function () {
  const bookFormSubmit = document.getElementById("bookFormSubmit");
  const searchBookForm = document.getElementById("searchBook");

  // Event untuk tambah/perbarui buku
  bookFormSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (isEditing) {
      perbaruiBuku();
    } else {
      tambahBuku();
    }
  });

  // Event untuk pencarian buku
  searchBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTitle = document.getElementById("searchBookTitle").value.trim();

    // Jika pencarian kosong, tampilkan semua buku
    if (!searchTitle) {
      renderBooks();
      return;
    }

    cariBuku(searchTitle);
  });

  loadBooks();
  renderBooks();
});

function tambahBuku() {
  const judul = document.getElementById("bookFormTitle").value;
  const penulis = document.getElementById("bookFormAuthor").value;
  const tahun = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  if (!judul || !penulis || isNaN(tahun)) {
    alert("Pastikan semua data buku telah diisi dengan benar!");
    return;
  }

  const book = { id: generateId(), judul, penulis, tahun, isComplete };
  isComplete ? completeBooks.push(book) : incompleteBooks.push(book);

  saveBooks();
  renderBooks();

  // Reset form
  document.getElementById("bookForm").reset();
}

function perbaruiBuku() {
  const updatedJudul = document.getElementById("bookFormTitle").value;
  const updatedPenulis = document.getElementById("bookFormAuthor").value;
  const updatedTahun = parseInt(document.getElementById("bookFormYear").value);
  const updatedIsComplete =
    document.getElementById("bookFormIsComplete").checked;

  if (!updatedJudul || !updatedPenulis || isNaN(updatedTahun)) {
    alert("Pastikan semua data buku telah diisi dengan benar!");
    return;
  }

  let targetArray = completeBooks.find((b) => b.id === bookToEditId)
    ? completeBooks
    : incompleteBooks;

  targetArray.forEach((b) => {
    if (b.id === bookToEditId) {
      b.judul = updatedJudul;
      b.penulis = updatedPenulis;
      b.tahun = updatedTahun;
      b.isComplete = updatedIsComplete;
    }
  });

  if (updatedIsComplete) {
    completeBooks.push(...incompleteBooks.filter((b) => b.id === bookToEditId));
    incompleteBooks = incompleteBooks.filter((b) => b.id !== bookToEditId);
  } else {
    incompleteBooks.push(...completeBooks.filter((b) => b.id === bookToEditId));
    completeBooks = completeBooks.filter((b) => b.id !== bookToEditId);
  }

  saveBooks();
  renderBooks();

  document.getElementById("bookForm").reset();
  document.getElementById("bookFormSubmit").innerText = "Tambah Buku";
  isEditing = false;
  bookToEditId = null;
}

function cariBuku(judul) {
  const searchResults = [
    ...completeBooks.filter((b) =>
      b.judul.toLowerCase().includes(judul.toLowerCase())
    ),
    ...incompleteBooks.filter((b) =>
      b.judul.toLowerCase().includes(judul.toLowerCase())
    ),
  ];

  if (searchResults.length === 0) {
    alert("Tidak ditemukan buku dengan judul tersebut.");
    renderBooks(); // Tampilkan semua jika tidak ada hasil
    return;
  }

  renderBooks(searchResults);
}

function renderBooks(searchResults = null) {
  renderCompleteBooks(searchResults);
  renderIncompleteBooks(searchResults);
}

function renderCompleteBooks(searchResults) {
  const completeBookList = document.getElementById("completeBookList");
  completeBookList.innerHTML = "";

  const books = searchResults || completeBooks;
  for (const book of books.filter((b) => b.isComplete)) {
    buatElementBuku(book);
  }
}

function renderIncompleteBooks(searchResults) {
  const incompleteBookList = document.getElementById("incompleteBookList");
  incompleteBookList.innerHTML = "";

  const books = searchResults || incompleteBooks;
  for (const book of books.filter((b) => !b.isComplete)) {
    buatElementBuku(book);
  }
}

function buatElementBuku(book) {
  const container = book.isComplete
    ? document.getElementById("completeBookList")
    : document.getElementById("incompleteBookList");

  const bookItem = document.createElement("div");
  bookItem.setAttribute("data-bookid", book.id);

  const titleItem = document.createElement("h3");
  titleItem.innerText = book.judul;

  const authorItem = document.createElement("p");
  authorItem.innerText = `Penulis: ${book.penulis}`;

  const yearItem = document.createElement("p");
  yearItem.innerText = `Tahun: ${book.tahun}`;

  const buttonContainer = document.createElement("div");

  const completeButton = document.createElement("button");
  completeButton.innerText = book.isComplete
    ? "Belum selesai dibaca"
    : "Selesai dibaca";

  completeButton.addEventListener("click", function () {
    if (book.isComplete) {
      incompleteBooks.push({ ...book, isComplete: false });
      completeBooks = completeBooks.filter((b) => b.id !== book.id);
    } else {
      completeBooks.push({ ...book, isComplete: true });
      incompleteBooks = incompleteBooks.filter((b) => b.id !== book.id);
    }

    saveBooks();
    renderBooks();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Hapus Buku";
  deleteButton.addEventListener("click", function () {
    if (book.isComplete) {
      completeBooks = completeBooks.filter((b) => b.id !== book.id);
    } else {
      incompleteBooks = incompleteBooks.filter((b) => b.id !== book.id);
    }

    saveBooks();
    renderBooks();
  });

  const editButton = document.createElement("button");
  editButton.innerText = "Edit Buku";
  editButton.addEventListener("click", function () {
    editBuku(book);
  });

  buttonContainer.append(completeButton, deleteButton, editButton);
  bookItem.append(titleItem, authorItem, yearItem, buttonContainer);
  container.append(bookItem);
}

function editBuku(book) {
  document.getElementById("bookFormTitle").value = book.judul;
  document.getElementById("bookFormAuthor").value = book.penulis;
  document.getElementById("bookFormYear").value = book.tahun;
  document.getElementById("bookFormIsComplete").checked = book.isComplete;

  isEditing = true;
  bookToEditId = book.id;

  document.getElementById("bookFormSubmit").innerText = "Perbarui Buku";
}

function saveBooks() {
  const data = {
    completeBooks,
    incompleteBooks,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadBooks() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    completeBooks = data.completeBooks || [];
    incompleteBooks = data.incompleteBooks || [];
  }
}

function generateId() {
  return +new Date();
}