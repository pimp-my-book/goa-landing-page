<template>
<div>
       <BoarderHeader
       HeaderText="Looking For More Info?"
       BodyText="Below is a contact form that you can fill out and send to us. Then someone will get in touch with you to help you with an queries."
       />

<div class="container lg:py-10 lg:px-10 s:px-5 mx-auto">
    <div class="lg:flex lg:justify-center">
      <ContactForm/>
    </div>
    
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
    },
    methods: {
    track(){
      this.$ga.page('/contact')
    }
  }
}
</script>

