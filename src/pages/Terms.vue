<template>
    <div>
        <BoarderHeader
    HeaderText="Terms of Service"
    BodyText="Below are our terms of service."
    />

    <div>

<DisplayLarge
text="Pimp My Book Terms of Service"
/>

<DisplaySmall
class="mt-5"
text="1. Terms"
/>
<FeatureText
text="By accessing the website at https://gogoa.co.za, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law."
/>
<DisplaySmall
class="mt-5"
text="2. Use License"
/>

<ol type="a">
   <li>
       <FeatureText
       text="Permission is granted to temporarily download one copy of the materials (information or software) on Pimp My Book's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
       />
   <ol type="i">
       <li>
           <FeatureText
text="modify or copy the materials"
/></li>
       <li>
           <FeatureText
text="use the materials for any commercial purpose, or for any public display (commercial or non-commercial)"
/>
           </li>
       <li>
           <FeatureText
           text="attempt to decompile or reverse engineer any software contained on Pimp My Book's website"
           />
       </li>
       <li>
           <FeatureText
           text="remove any copyright or other proprietary notations from the materials; or"
           />
       </li>
       <li>
           <FeatureText
           text="transfer the materials to another person or mirror the materials on any other server."
           />
       </li>
   </ol>
    </li>
   <li>
       <FeatureText
       text="This license shall automatically terminate if you violate any of these restrictions and may be terminated by Pimp My Book at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format."
       />
   </li>
</ol>

    <DisplaySmall
    class="mt-5"
text="3. Disclaimer"
/>
    
<ol type="a">
   <li>
       <FeatureText
    text="The materials on Pimp My Book's website are provided on an 'as is' basis. Pimp My Book makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
"
    />
   <li>
       <FeatureText
    text="Further, Pimp My Book does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
"
    />
    </li>
</ol>

    <DisplaySmall
    class="mt-5"
text="4. Limitations"
/>
    

    <FeatureText
    text="In no event shall Pimp My Book or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pimp My Book's website, even if Pimp My Book or a Pimp My Book authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
    />
    

      <DisplaySmall
      class="mt-5"
text="5. Accuracy of materials"
/>
    

    <FeatureText
    text="The materials appearing on Pimp My Book's website could include technical, typographical, or photographic errors. Pimp My Book does not warrant that any of the materials on its website are accurate, complete or current. Pimp My Book may make changes to the materials contained on its website at any time without notice. However Pimp My Book does not make any commitment to update the materials.
"
    />

    <DisplaySmall
    class="mt-5"
text="6. Links"
/>
    

    <FeatureText
    text="Pimp My Book has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pimp My Book of the site. Use of any such linked website is at the user's own risk.
"
    />

      <DisplaySmall
      class="mt-5"
text="7. Modifications"
/>

    <FeatureText
    text="Pimp My Book may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
"
    />

<DisplaySmall
class="mt-5"
text="8. Governing Law"
/>



     <FeatureText
    text="    These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
"
    />

    </div>
    </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import FeatureText from '../components/Typography/FeatureText'
import DisplaySmall from '../components/Typography/DisplaySmall'

export default {
    name: 'Terms',
    components:{
        BoarderHeader,
        DisplayLarge,
        FeatureText,
        DisplaySmall
    }
}
</script>
