<template>
    <div>
        <BoarderHeader
    HeaderText="Privacy"
    BodyText="Below is our privacy policy."
    />
    <div>
        <DisplayLarge
        text="Privacy Policy"
        />

       <FeatureText
       class="mt-5"

       text="Your privacy is important to us. It is Pimp My Book's policy to respect your privacy regarding any information we may collect from you across our website, https://gogoa.co.za, and other sites we own and operate."
       />

         <FeatureText
         class="mt-5"
       text="We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used."
       />

        <FeatureText
        class="mt-5"
       text="We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification."
       />

        <FeatureText
        class="mt-5"
       text="We don’t share any personally identifying information publicly or with third-parties, except when required to by law."
       />

        <FeatureText
        class="mt-5"
       text="Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."
       />

        <FeatureText
        class="mt-5"
       text="You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services."
       />

        <FeatureText
        class="mt-5"
       text="Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
       />

        <FeatureText
        class="mt-5"
       text="This policy is effective as of 15 July 2019."
       />



    </div>
    </div>
</template>

<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import FeatureText from '../components/Typography/FeatureText'


export default {
    name: 'Privacy',
    components:{
        BoarderHeader,
        DisplayLarge,
        FeatureText
    }
}
</script>
