/* Reset Dasar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #fdf5e6; /* Warna krem lembut */
    color: #4a3728; /* Warna teks cokelat tua */
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #8b5a2b;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #4a3728;
    font-weight: 500;
}

.btn-contact {
    background-color: #5d4037;
    color: white;
    padding: 10px 25px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10%;
    min-height: 80vh;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

/* Bentuk melengkung di belakang foto */
.shape {
    width: 350px;
    height: 450px;
    background-color: #e0d5c1;
    border-radius: 45% 55% 45% 55% / 30% 30% 70% 70%;
    overflow: hidden;
    border: 2px solid #8b5a2b;
    display: flex;
    align-items: flex-end;
}

.shape img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.hero-text {
    flex: 1;
    padding-left: 50px;
}

.hero-text h1 {
    font-size: 3rem;
}

.hero-text h1 span {
    color: #8b5a2b;
}

.hero-text h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.highlight {
    color: #8b5a2b;
    border-right: 2px solid #4a3728; /* Efek kursor mengetik */
    padding-right: 5px;
}

.hero-text p {
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 500px;
}

/* Icons & Buttons */
.social-icons {
    margin-bottom: 30px;
}

.social-icons a {
    font-size: 24px;
    color: #8b5a2b;
    margin-right: 20px;
    border: 1px solid #8b5a2b;
    padding: 10px;
    border-radius: 50%;
    transition: 0.3s;
}

.social-icons a:hover {
    background-color: #8b5a2b;
    color: white;
}

.btn-cv {
    background-color: #5d4037;
    color: white;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}