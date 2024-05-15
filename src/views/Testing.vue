<template>
    <div class="portfolio">
        <header>
            <h1>Welcome to My Portfolio</h1>
        </header>
        <main>
            <!-- Your portfolio content goes here -->
        </main>
        <footer>
            <p>&copy; 2022 My Portfolio. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'PortfolioA',
    // Your component logic goes here
}
</script>

<style scoped>
.portfolio {
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin: 0;
}

main {
    margin-top: 20px;
}

footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 12px;
}
</style>