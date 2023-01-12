import React from 'react'
import './Appoinments.css'

const Appointment = () => {
  return (
    <>


      <div className="main-flex">

          <div className="section-div">
            <h2 className="appointment">Appointment</h2>
            <div className="add-flex">

              <p className="booked-list"> List Of booked appointment</p>
              <button className="add">Add ➕</button>

            </div>

            <hr />
            <div className="uppermost-nav">
              <input placeholder="Search by name,number" className="search-nav"></input>
              <div className="border-heading">
                <p className="header-on-line" >Date</p>
                <select className="select-nav">
                  <option >This week</option>
                </select>
              </div>
              <div className="border-heading">
                <p className="header-on-line">Date</p>
                <select className="select-nav">
                  <option>This week</option>
                </select>
              </div>
              <div className="border-heading">
                <p className="header-on-line">Date</p>
                <select className="select-nav">
                  <option>This week</option>
                </select>
              </div>
              <div className="border-heading">
                <p className="header-on-line">Date</p>
                <select className="select-nav">
                  <option>This week</option>
                </select>
              </div>

            </div>

            <section className="section">

              <div className="chart-container">
                <div className="chart-nav">
                  <h6 className="common-div">ORDER ID</h6>
                  <h6 className="common-div">PATIENT</h6>
                  <h6 className="common-div">CONSULTATION</h6>
                  <h6 className="common-div">TEAM</h6>
                  <h6 className="common-div">DOCTOR</h6>
                  <h6 className="common-div">SLOT</h6>
                  <h6 className="common-div">STATUS</h6>
                  <h6 className="common-div">INVOICE</h6>
                  <h6 className="common-div">ACTION</h6>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2422562</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">Risha Mahin</p>
                      <p >26,F</p></div>
                  </div>
                  <div className="common-div">
                    <div><p><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78479 0.0932617H10.8924C11.7081 0.0932617 12.3647 0.749887 12.3647 1.56554V8.89055C12.3647 9.70619 11.7081 10.3628 10.8924 10.3628H1.78479C0.969139 10.3628 0.3125 9.70619 0.3125 8.89055V1.56554C0.3125 0.749887 0.969139 0.0932617 1.78479 0.0932617Z" fill="#29375F" />
                    </svg>
                      Video</p>
                      <p>First Consultation</p></div>
                  </div>

                  <div className="common-div">
                    <p></p>
                  </div>
                  <div className="common-div">
                    <p>Anil Kumar</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 3,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Cancelled</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Refunded</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2429657</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">Riju K</p>
                      <p >32,k</p></div>
                  </div>
                  <div className="common-div">
                    <div><p><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78479 0.0932617H10.8924C11.7081 0.0932617 12.3647 0.749887 12.3647 1.56554V8.89055C12.3647 9.70619 11.7081 10.3628 10.8924 10.3628H1.78479C0.969139 10.3628 0.3125 9.70619 0.3125 8.89055V1.56554C0.3125 0.749887 0.969139 0.0932617 1.78479 0.0932617Z" fill="#29375F" />
                    </svg>
                       Video</p>
                      <p>Follow-Up</p></div>
                  </div>
                  <div className="common-div">
                    <p>Medical Camp</p>
                  </div>
                  <div className="common-div">
                    <p>Greg Ferguson</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 4,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">No Show</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Unpaid</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2422455</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">Prajeesh</p>
                      <p >47,M</p></div>
                  </div>
                  <div className="common-div">
                    <div><p>Anytime Consult</p>
                      <p></p></div>
                  </div>
                  <div className="common-div">
                    <p></p>
                  </div>
                  <div className="common-div">
                    <p>Pankaj Dhir</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 5,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Completed</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Paid</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2421751</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">Nikita Gandhi</p>
                      <p >29,F</p></div>
                  </div>
                  <div className="common-div">
                    <div><p><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78479 0.0932617H10.8924C11.7081 0.0932617 12.3647 0.749887 12.3647 1.56554V8.89055C12.3647 9.70619 11.7081 10.3628 10.8924 10.3628H1.78479C0.969139 10.3628 0.3125 9.70619 0.3125 8.89055V1.56554C0.3125 0.749887 0.969139 0.0932617 1.78479 0.0932617Z" fill="#29375F" />
                    </svg>
                      Video</p>
                      <p>First Consultation</p></div>
                  </div>
                  <div className="common-div">
                    <p>Medical Camp</p>
                  </div>
                  <div className="common-div">
                    <p>Sujata Mohan</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 6,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Booked</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Paid</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2422455</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">Darshan Singh</p>
                      <p >36,M</p></div>
                  </div>
                  <div className="common-div">
                    <div><p>In-person</p>
                      <p>Second-Opiniion</p></div>
                  </div>
                  <div className="common-div">
                    <p></p>
                  </div>
                  <div className="common-div">
                    <p>Ram Dayanand</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 7,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Completed</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Unpaid</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>
                <div className="chart-row">
                  <div className="common-div"><p>2422582</p></div>
                  <div className="common-div">
                    <div><p className="patient-name">vikash soni</p>
                      <p >26,M</p></div>
                  </div>
                  <div className="common-div">
                    <div><p><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.78479 0.0932617H10.8924C11.7081 0.0932617 12.3647 0.749887 12.3647 1.56554V8.89055C12.3647 9.70619 11.7081 10.3628 10.8924 10.3628H1.78479C0.969139 10.3628 0.3125 9.70619 0.3125 8.89055V1.56554C0.3125 0.749887 0.969139 0.0932617 1.78479 0.0932617Z" fill="#29375F" />
                    </svg>
                      Video</p>
                      <p>First Consultation</p></div>
                  </div>
                  <div className="common-div">
                    <p></p>
                  </div>
                  <div className="common-div">
                    <p>Prakash Jhanti</p>
                  </div>
                  <div className="common-div">
                    <p>Jul 3,2021<br />8:53 AM</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Completed</p>
                  </div>
                  <div className="common-div">
                    <p className="status">Paid</p>
                  </div>
                  <div className="common-div">⋮</div>
                </div>

              </div>
            </section>
          </div>
        </div>

      </>
      )
}

      export default Appointment