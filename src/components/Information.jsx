import React from 'react';
import Footer from './Footer';

const Information = () => (
  <div data-testid="appInformation">
    <div className="information-section">
      <div className="copyright p-2 mb-3 d-flex ">
        <h5 className="mx-auto"> Copyright © 2020 by Odong Alican </h5>
      </div>
      <div className="p-2 text-center text-secondary copyright">
        All rights reserved. No part of this publication may be reproduced, distributed,
        or transmitted in any form or by any means, including photocopying, recording,
        or other electronic or mechanical methods, without the prior
        written permission of the developer
        , except in the case of brief quotations embodied in critical reviews and
        certain other noncommercial uses permitted by copyright law.
      </div>
      <div className="copyright text-center p-4 text-secondary">
        For permission requests,
        write to the Software developer, addressed “Attention: Permissions
        Coordinator,” at the address below.
        <p>sandieo.2020@gmail.com</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default Information;