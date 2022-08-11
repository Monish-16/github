import styled from 'styled-components';

export const Styles = styled.div`
padding: 0.1rem;
table {   
   border-spacing: 0;
   border: 1px solid whitesmoke;
   tr {
    border-bottom: 1px solid whitesmoke;
     :last-child {
       td {        
         border-bottom: 0;
       }       
     }
   }

   th,
   td {     
     margin: 0;
     padding: 0.1rem;
     border-bottom: 2px solid whitesmoke;
     border-right: 2px solid whitesmoke;
    //  text-align: center;   

     :last-child {
       border-right: 0;
     }
   }
`

