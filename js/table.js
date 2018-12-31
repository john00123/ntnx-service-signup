// const data = {
//   type: ['',
//   'Month to Month <br> <br><span alt> Most flexible deal</span>',
//   'Annual Commitment <br> <br><span alt> Predictable Billing</span>',
//   'Single Payment <br> <br><span alt> Most Savings</span>'],
//   subType: ['','Most flexible deal','Predictable Billing','Most Savings'],
//   cloud: ['Cloud consumption', 4.75, 4.25, 3.75],
//   billed: ['Next Bill',1,1,1]
// }
let price = 100000

const data = [
  {
    name:'Monthly Plan',
    description:'Most flexible deal',
    percentage: 0.0475,
    period:'Monthly',
    month: 1,
    year: 1,
  },
  {
    name:'Annual Commitment',
    description:'Predictable billing',
    percentage: 0.0425,
    period:'Monthly',
    month: 1,
    year: 1
  },
  {
    name:'Single Payment',
    description:'Most Popular',
    percentage: 0.0375,
    period:'Annual',
    month: 0,
    year: 1
  }
]


$('container').append('<div class="table-holder" card fw></div>')
$('.table-holder').append(`<table cellspacing="0" fw class='price-matrix'></table>`)

$('.price-matrix').append(`

  <tr><th></th>
    ${data.map(value =>`<th>${value.name} <br>
    <span alt>${value.description}</span></th>`)}
  </tr>

  <tr><td>Cloud Cost Percentage</td>
    ${data.map(value =>`<td>${value.percentage*100}%</td>`)}
  </tr>

  <tr><td>Billing Period</td>
    ${data.map(value =>`<td>${value.period}</td>`)}
  </tr>

  <tr><td>Monthy Cost</td>
    ${data.map(value => value.period !== 'Annual' ?
      `<td class='calc'>$ ${price * value.percentage}.00 </td>` :  `<td fade> - </td>`)}
  </tr>

  <tr><td>Annual Cost</td>
    ${data.map(value =>`<td class='calc2'>$ ${price * value.percentage*12}.00</td>`)}
  </tr>

  <tr><td></td>
    ${data.map(value =>`<td style= 'padding:5px 20px'><button primary fw> Select</button></td>`)}
  </tr>
  `
);



$('container').append(`
  <br>
  <div card fw vc class='price-card'>

    <div class='price-component' vcs style='align-self:flex-start'>
    <h2 fw> 2. Company information </h2>

    <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses & pick a payment plan to continue</p>
    </div>
    <hr>
    <div fw hcd style="margin: 30px 0;">
      <div vss="" style=" align-self: flex-start;  width: 770px;">
            <h3> Company information</h3>
              <p alt=""> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses &amp; pick a payment plan to continue</p>
            </div>


          <form>

            <label>Name</label>
            <input>
            <label>Name</label>
            <input>
            <label>Name</label>
            <input>
            <label>Name</label>
            <input>

          </form></div>

          <hr>
          <div fw hcd>
            <div vss="" style="
          align-self: flex-start;margin-top: 30px;width: 770px;: flex-start;">
                  <h3> Payment Method</h3>
                    <p alt=""> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses &amp; pick a payment plan to continue</p>
                  </div>


                <form>

                  <label>Name</label>
                  <input>
                  <label>Name</label>
                  <input>
                  <label>Name</label>
                  <input>
                  <label>Name</label>
                  <input>

                </form></div>
  </div>


  `)

$('container').append(`
    <br>
    <div fw hcs >
      <div card fw class='price-card' vcs style='width:600px; margin:10px 0; flex-shrink:0'>
        <div class='price-component' vcs style='align-self:flex-start'>
        <h2 fw> 3. Review and Confirm </h2>

        <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses & pick a payment plan to continue</p>
        </div>
        <hr>

        <div fw hcd>
          <div vss="" style=" align-self: flex-start; margin: 0px 0; width: 770px;">
                <h3> Payment Plan</h3>
                  <p alt=""> Beam single payment annual plan</p>
          </div>
          <button secondary> Edit </button>
        </div>

      <hr>

      <div fw hcd>
        <div vss="" style=" align-self: flex-start; margin: 0px 0; width: 770px;">
              <h3> Company details</h3>
                <p alt=""> Nutanix <br>1740 Technology Dr #150, San Jose, CA 95110</p>
        </div>
        <button secondary> Edit </button>
      </div>

      <hr>
      <div fw hcd>
        <div vss="" style=" align-self: flex-start; margin: 0px 0; width: 770px;">
              <h3> Automatic Renewals</h3>
                <p alt="">To cancel your subscription, turn off automatic renewal,<br> before then end of term to avoid downtime.</p>
        </div>
        <button primary> Toggle </button>
      </div>
    </div>


    <div card class='order' style='align-self:flex-start; margin: 10px 0 20px 20px;'fw>
      <h2 fw>Order Summary</h2>
      <div hcd> <h3><span> 1</span> Annual Plan </h3>
      <h3><span> $</span> 45.000 </h3></div>
      <p style='margin-top:0; opacity:0.8;'> Starting date January 11 2019</p>
      <button fw>Complete purchase</button>
      <img class='rotate' src='../img/rotate.svg'/>
    </div>


  </div>

`)
