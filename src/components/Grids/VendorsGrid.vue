<template>
    <div class="vendors-grid-container">
        <div class="vendors-grid-item rounded-lg shadow-lg" style="background-color: rgb(78, 202, 93, 0.5)">
            <span class="text-xl"><strong>1. Customers</strong></span><br/>
            <br/>
            Top bursary clients<br/>
            6000 textbooks delivered<br/>
            Delivered nationally
        </div>
        <div class="vendors-grid-item rounded-lg shadow-lg" style="background-color: rgb(78, 202, 93, 0.5)">
            <span class="text-xl"><strong>2. Suppliers</strong></span><br/>
            <br/>
            Lexis Nexis, Juta, Pearson, Oxford,<br/>
            Cengage, McGraw Hill, Elsevier,<br/>
            SMD Technologies, Mustek,<br/>
            Pimp My Book & More
        </div>
        <div class="vendors-grid-item rounded-lg shadow-lg" style="background-color: rgb(78, 202, 93, 0.5)">
            <span class="text-xl"><strong>3. About the company</strong></span><br/>
            <br/>
            13 years experience in book retail<br/>
            100% black owned<br/>
            Tech driven
        </div>
        <div class="vendors-grid-item rounded-lg shadow-lg" style="background-color: rgb(78, 202, 93, 0.5)">
            <span class="text-xl"><strong>4. Team</strong></span><br/>
            <br/>
            Dedicated student support staff<br/>
            Distribution management in major cities
        </div>
    </div>
</template>

<script>
export default {
    name: "VendorsGrid"
}
</script>

<style>
    .vendors-grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        padding: 10px;
        max-width: 1366px;
        margin: auto
    }

    .vendors-grid-container > div {
        text-align: center;
    }

    .vendors-grid-item {
        margin: auto;
        width: 100%;
        max-width: 500px;
        height: 100%;
        padding: 30px;
        text-align: left !important;
    }

    @media screen and (max-width: 720px) {
        .vendors-grid-container {
            grid-template-columns: auto;
            grid-gap: 50px
        }

        .vendors-grid-item {
            max-width: 380px;
        }
    }
</style>