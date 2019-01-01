
let price = 100000

//title data
let j = ['',
'Cloud Cost Percentage','Billing Period','Monthly Cost','Annual Cost','']

//table data
const data = [
  {
    name:'Monthly Plan',
    description:'Most flexible deal',
    perc: 0.0475,
    period:'Monthly',
    month: 1,
    year: 1,
  },
  {
    name:'Annual Commitment',
    description:'Predictable billing',
    perc: 0.0425,
    period:'Monthly',
    month: 1,
    year: 1
  },
  {
    name:'Single Payment',
    description:'Most Popular',
    perc: 0.0375,
    period:'Annual',
    month: 0,
    year: 1
  }
]

//create table container
$('container').append(`
  <div class="table-holder" card fw>
    <table cellspacing="0"></table>
  </div>`)

//add data to table
$('table').append(`
  <tr><th/>
    ${data.map(v =>`<th>${v.name}<br>
     <span alt>${v.description}</span></th>`)}
  </tr>
  <tr> ${data.map(v =>`<td>${v.perc*100}%</td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.period  } </td>`)} </tr>

  <tr> ${data.map(v => v.period !== 'Annual' ?
      `<td class='calc'>$${price * v.perc}.00 </td>` :
      `<td fade> - </td>`)}
  </tr>

  <tr> ${data.map(v =>`<td class='calc2'>$
       ${price * v.perc*12}.00</td>`)}
  </tr>
  <tr> ${data.map(v =>`<td><button primary fw> Select</button></td>`)}</tr>
  `);

//add first colum titles
for(let i=1; i<j.length; i++){ $('tr').eq(i).prepend(`<td>${j[i]}</td>`)}




//create main containers

const info = [{
  title:'Company information',
  description:'Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses &amp; pick a payment plan to continue',
  forms:['Company Name','Address','Zip Code','City','State','Country']
  },
  {
    title:'Payment Method',
    description:'Inovice require a credit check',
    forms:['Card Number',"Card Holder's Name",'Exp. Date','CVV','Address','Zip Code','City','State','Country']
  }
]

$('container').append(`<div class='company-info' card fw></div>`);

info.map(value => $('.company-info').append(`
  <div class='two-col-block' fw hsd>
    <div class='block-one' fw>
      <h3 style='margin-top:0' fw>${value.title}</h3>
      <p alt>${value.description}</p>
    </div>
    <form>
      ${value.forms.map(input =>
        `<label>${input}</label><input type=text></input>`).join('')
      }
    </form>
  </div>
`));

$('.company-info').prepend(
  `<h2>2. Company Details</h2> <p alt>
  Beam subscriptions are based on how much you spend on the cloud.<br>Provide an estimate of your month cloud expenses & pick a payment plan to continue</p><br>`)





$('container').append(`
    <div fw hsd>
      <div card fw class='price-card' vcs style='width:600px; flex-shrink:0'>
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


    <div card class='checkout'fw>
      <h2 fw>Order Summary</h2>
      <div hcd> <h3><span> 1</span> Annual Plan </h3>
      <h3><span> $</span> 45.000 </h3></div>
      <p style='margin-top:0; opacity:0.8;'> Starting date January 11 2019</p>
      <button secondary fw>Complete purchase</button>
      <img class='rotate' src='../img/rotate.svg'/>
    </div>


  </div>

`)
