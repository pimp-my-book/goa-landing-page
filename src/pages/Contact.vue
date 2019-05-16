<template>
<div>
       <BoarderHeader
       HeaderText="Looking For More Info?"
       BodyText="Below is a contact form that you can fill out and send to us. Then someone will get in touch with you to help you with an queries."
       />

<div class="container">
    <ContactForm/>
</div>
</div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import ContactForm from '../components/Forms/ContactForm'

export default {
    name: 'Contact',
    components:{
        BoarderHeader,
        ContactForm
    }
}
</script>

