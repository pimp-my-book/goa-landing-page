<template>
    <div class="contact-grid-container">
        <div class="contact-grid-item rounded-lg shadow-lg">
            <strong><u>New Clients & Related</u></strong><br/>
            <br/>
            <p class="leading-normal">
                Mpodumo Doubada<br/>
                Cell: <a href="tel:0726826064">072 682 6064</a> <embed width="20px" height="20px" style="margin-left: 10px" src="https://ask-thuto-assets.s3.amazonaws.com/home/contact/whatsapp.svg"/><br/>
                Email: <a href="mailto:mpodumo@askthuto.co.za">mpodumo@askthuto.co.za</a><br/>
                <br/>
                <strong>Business Development Manager</strong><br/>
            </p>
        </div>
        <div class="contact-grid-item rounded-lg shadow-lg">
            <strong><u>Students & Operations</u></strong> <br/>
            <br/>
            <p class="leading-normal">
                Gakeema Lamera<br/>
                Cell: <a href="tel:0658505225">065 850 5225</a> <embed width="20px" height="20px" style="margin-left: 10px" src="https://ask-thuto-assets.s3.amazonaws.com/home/contact/whatsapp.svg"/><br/>
                Email: <a href="mailto:info@askthuto.co.za">info@askthuto.co.za</a><br/>
                <br/>
                <strong>Student Support Manager</strong><br/>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactGrid"
}
</script>

<style>
    .contact-grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        padding: 10px;
        margin: auto;
        padding: 20px;
        padding-top: 50px;
        padding-bottom: 70px;
    }

    .contact-grid-item {
        margin-left: 100px;
        padding: 30px;
    }

    .contact-grid-container > div {
        text-align: left;
        font-size: 20px;
    }

    @media screen and (max-width: 420px) {
        .contact-grid-container{
            grid-template-columns: auto;
            padding-top: 50px
        }

        .contact-grid-item {
            margin-left: 0px !important;
        }
    }
    @media screen and (max-width: 770px) and (min-width: 430px) {
        .contact-grid-item {
            margin-left: 10px !important;
        }
    }
</style>
