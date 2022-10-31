// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import "./Profile.css"

// export default function PersonalProfile() {
//   return (
//     <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     alt="Avatar" className="my-5 mx-6" style={{ width: '80px' }} fluid />
//                   {/* <MDBTypography tag="h5">Marie Horwitz</MDBTypography> */}
//                   {/* <MDBCardText>Web Designer</MDBCardText> */}
//                   {/* <MDBIcon far icon="edit mb-5" /> */}
//                 </MDBCol>

//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6"> User Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="4" className="mb-3">
//                         <MDBTypography tag="h6">Name</MDBTypography>
//                         <MDBCardText className="text-muted">Zamzam Hassan</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="4" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">Zamzam44@gmail.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="4" className="mb-3">
//                         <MDBTypography tag="h6">Phone Number</MDBTypography>
//                         <MDBCardText className="text-muted">+254 725853719</MDBCardText>
//                       </MDBCol>
//                       {/* <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol> */}
//                     </MDBRow>

//                     {/* <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow> */}

//                     <div className="d-flex justify-content-start">
//                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }

import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div>
      <div class="background"></div>

      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div class="front__face-photo"></div>
            <div class="front__text">
              <h3 class="front__text-header">Bobby Korec</h3>
              <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>Seattle</p>

              <span class="front__text-hover">Hover to Find Me</span>
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a href=" " class="social-icon"><i class="fab fa-codepen" aria-hidden="true"></i></a>
              <a href=" " class="social-icon"><i class="fab fa-github-square" aria-hidden="true"></i></a>
              <a href=" " class="social-icon"><i class="fab fa-linkedin-square" aria-hidden="true"></i></a>
              <a href=" " class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
