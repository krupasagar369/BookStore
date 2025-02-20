document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "₹299", img: "https://www.maplepress.co.in/cdn/shop/products/thegreatgatsby_700x700.jpg?v=1650952292" },
        { title: "Pride and Prejudice", author: "Jane Austen", price: "₹279", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90&crop=false" },
        { title: "Harry potter", author: "J. K. Rowling", price: "₹199", img: "https://assets-prd.ignimgs.com/2023/05/03/hp-deathly-hallows-1683157182524.jpeg" },
        { title: "The Lord of Rings", author: "J.R.R. Tolkien", price: "₹189", img: "https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg?w=3840" },
        { title: "the shattering book ", author: "van allen plexico", price: "₹249", img: "https://images.squarespace-cdn.com/content/v1/55c934b2e4b07aa63f0469cb/2e6e6bd2-ab90-4bbf-b9a3-2e0a68bae100/Screen+Shot+2022-01-03+at+3.45.08+PM.png" },
        { title: "Pride and Prejudice ", author: "Jane Austen", price: "₹229", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/1/w/r/pride-and-prejudice-original-imagrvgefgppadqp.jpeg?q=90&crop=false" },
        { title: "1984", author: "George Orwell", price: "₹319", img: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg" },
        { title: "The Alchemist", author: "Paulo Coelho", price: "₹399", img: "https://m.media-amazon.com/images/I/81UGPuNl7kL._UF1000,1000_QL80_.jpg" }
    ];

    const booksPerPage = 3;
    let currentPage = 1;

    function displayBooks(page) {
        const bookList = document.getElementById("book-list");
        bookList.innerHTML = "";

        const start = (page - 1) * booksPerPage;
        const end = start + booksPerPage;
        const paginatedBooks = books.slice(start, end);

        paginatedBooks.forEach(book => {
            const bookCard = `
                <div class="col-md-4">
                    <div class="card book-card">
                        <img src="${book.img}" class="card-img-top" alt="${book.title}">
                        <div class="card-body book-info">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">by ${book.author}</p>
                            <p class="card-text fw-bold">${book.price}</p>
                            <button class="btn btn-danger pl-4" style="background-color: #ff6666; border-color: #ff6666;">Buy</button>
                        </div>
                    </div>
                </div>
                
            `;
            bookList.innerHTML += bookCard;
        });
    }

    function setupPagination() {
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        const pageCount = Math.ceil(books.length / booksPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement("li");
            pageItem.classList.add("page-item");
            if (i === currentPage) {
                pageItem.classList.add("active");
            }

            const pageLink = document.createElement("a");
            pageLink.classList.add("page-link");
            pageLink.href = "#";
            pageLink.textContent = i;

            pageLink.addEventListener("click", function (event) {
                event.preventDefault();
                currentPage = i;
                displayBooks(currentPage);
                setupPagination();
            });

            pageItem.appendChild(pageLink);
            pagination.appendChild(pageItem);
        }
    }

    displayBooks(currentPage);
    setupPagination();
});

