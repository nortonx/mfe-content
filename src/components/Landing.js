import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Landing = () => {
  const [visible, setVisible] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);


  return (
    <div className="grid grid-nogutter surface-section text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
              <span className="block text-6xl font-bold mb-1">Create the screens your</span>
              <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
              <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <Button label="Learn More" type="button" className="mr-3 p-button-raised" onClick={() => setVisible(true)}></Button>
              <Button label="Live Demo" type="button" className="p-button-outlined" onClick={() => setDemoVisible(true)}></Button>
              <Dialog header="Wanna learn more?" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <h1>Go to https://starshiptroopers.net</h1>
              </Dialog>
              <Dialog header="Loading" visible={demoVisible} style={{ width: '50vw' }} onHide={() => setDemoVisible(false)}>
                <h1>There is no demo. Just loading.</h1>
              </Dialog>
          </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
          <img src="/assets/Designer.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
      </div>
    </div>
  );
}

export default Landing;