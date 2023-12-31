import React from 'react';

function Footer() {
  return (
    <footer className="py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <h3>Network Operating Hours:</h3>
            <hr />
            <p>Mon-Sat: 7:00 AM - 10:00 PM</p>
            <p>Sun: 9:00 AM - 7:00 PM</p>
          </div>
          <div className="col-sm">
            <h3>Contact Information:</h3>
            <hr />
            <p>
              {' '}
              <img src="src\images\image 61.png" alt="" /> +38 (097) 410 50 50
            </p>
            <p>
              {' '}
              <img src="src\images\image 66.png" alt="" /> strong.olimp@gmail.com
            </p>
          </div>
          <div className="col-sm">
            <img src="src\images\image 58.png" alt="instagram" className="mx-2 ps-2 py-5" />
            <img src="src\images\image 57.png" alt="facebook" className="mx-2 ps-2 py-5"  />
            <img src="src\images\image 56.png" alt="youtube" className="mx-2 ps-2 py-5" />
          </div>
          <div className='col-sm'>
              <h1><img src="src\images\navbar.png" alt="" /></h1>
              <p>Olymp Fitness Club Network</p>
              <p><img src="src\images\image 59.png" alt="" /> <img src="src\images\image 60.png" alt="" /> </p>
              <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
