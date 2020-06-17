<template>
    <div id="products" class="mb-5 mt-10">
        <p class="text-4xl font-display text-center mb-8">
            <span style="color: #4eca5d">30%</span> reduction in book allowance costs
        </p>
        <div class="products-grid-container text-left">
            <div class="products-grid-item rounded-lg shadow-lg">
                <span class="text-xl"><strong>Give Students Cash</strong></span><br/>
                <br/>
                No Control<br/>
                <br/>
                No Expense Reports<br/>
                <br/>
                Admin of paying many students<br/>
                <br/>
                No control of what students purchase<br/>
                <br/>
                All students get a set amount regardless of needs<br/>
                <br/>
                No cost reduction<br/>
            </div>
            <div class="products-grid-item rounded-lg shadow-lg">
                <span class="text-xl"><strong>Account/Card Bookstore</strong></span><br/>
                <br/>
                Medium Control<br/>
                <br/>
                No Reports<br/>
                <br/>
                Admin of paying multiple bookstores<br/>
                <br/>
                Can't control if students buy what is prescribed<br/>
                <br/>
                All students get a set amount regardless of need<br/>
                <br/>
                No cost reduction<br/>
            </div>
            <div class="products-grid-item rounded-lg shadow-lg" style="background-color: rgb(78, 202, 93, 0.5)">
                <span class="text-xl"><strong>Askthuto</strong></span><br/>
                <br/>
                Full Control<br/>
                <br/>
                Expense/Order Reports<br/>
                <br/>
                No admin<br/>
                <br/>
                No Wastage - AskThuto checks if ordered books are prescribed<br/>
                <br/>
                No Overs/Unders - Each student gets what they need as prescribed by the lecturer<br/>
                <br/>
                Average 30% reduction in total allowance budget<br/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsGrid"    
}
</script>

<style>
    .products-grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        max-width: 1366px;
        margin: auto
    }

    .products-grid-container > div {
        text-align: center;
    }

    .products-grid-item {
        margin: auto;
        width: 100%;
        height: 100%;
        max-width: 380px;
        padding: 30px;
        text-align: left !important;
    }

    @media screen and (max-width: 720px) {
        .products-grid-container {
            grid-template-columns: auto;
            grid-gap: 50px
        }

        #products {
            margin-top: 30px;
        }
    }
</style>