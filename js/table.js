
// price variable
let price = 100000

//title data
let j = ['',
'User and Team Management','Centralized Billing','App Publishing to users','User customization','On demand GPU','Multi account Management','Multi-region Support','']

//table data
const data = [
  {
    name: 'Standard',
    ut:1,
    cb:1,
    ap:1,
    uc:1,
    og:0,
    ma:0,
    mr:0,
  },
  {
    name: 'Pro',
    ut:1,
    cb:1,
    ap:1,
    uc:1,
    og:1,
    ma:0,
    mr:0,
  },
  {
    name: 'Enterprise',
    ut:1,
    cb:1,
    ap:1,
    uc:1,
    og:1,
    ma:1,
    mr:1,
  },
]

//create table container
$('container').append(`
  <div class="table-holder" card fw>
    <table cellspacing="0"></table>
  </div>`)

//add data to table
$('table').append(`
  <tr><th/>
    ${data.map(v =>`<th>${v.name}</th>`)}
  </tr>

  <tr> ${data.map(v =>`<td>${v.ut  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.cb  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.ap  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.uc  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.og  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.ma  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.mr  } </td>`)} </tr>
  <tr> ${data.map(v =>`<td><button primary fw> Select</button></td>`)}</tr>
  `);

//add first colum titles
for(let i=1; i<j.length; i++){ $('tr').eq(i).prepend(`<td>${j[i]}</td>`)}


////////////////////////////////////////////////////////////////////


<<<<<<< HEAD
<<<<<<< HEAD
// $('table').before(
//   `<div fw hsd>
//     <div class='block-one' vss>
//       <h2> 1. Select your plan </h2>
//
//       <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
//     </div>
//    </div>
//   `
// )
// $('table').before(`<hr>`)

||||||| c80237f... added right order
$('table').before(
  `<div fw hsd>
    <div class='block-one' vss>
      <h2> 1. Select your plan </h2>
||||||| c80237f... added right order
$('table').before(
  `<div fw hsd>
    <div class='block-one' vss>
      <h2> 1. Select your plan </h2>
=======
>>>>>>> parent of c80237f... added right order

<<<<<<< HEAD
      <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
    </div>
   </div>
  `
)
$('table').before(`<hr>`)

$('container').append(`
<div card fw hcd>
  <div> <h2> Select Minimun commitment </h2>
    <p alt> {This is the place we explain why a higher commitment is better for them.}</p>
  </div>

  <div  class='input-currency'>
    <label> Estimated Commitment (Min. $5000.00)</label>
    <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
  </div>

</div>
`

)
=======

>>>>>>> parent of c80237f... added right order
||||||| c80237f... added right order
      <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
    </div>
   </div>
  `
)
$('table').before(`<hr>`)

$('container').append(`
<div card fw hcd>
  <div> <h2> Select Minimun commitment </h2>
    <p alt> {This is the place we explain why a higher commitment is better for them.}</p>
  </div>

  <div  class='input-currency'>
    <label> Estimated Commitment (Min. $5000.00)</label>
    <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
  </div>

</div>
`

)
=======
>>>>>>> parent of c80237f... added right order
//create main containers

const info =[
  {
  title:'Company information',
  description:'Because there is no organization associated with this account, we need some basic information. This will make this account the administrator of the organization. Please verify this with your company before proceeding.',
  forms:['Company Name','Address','Zip Code','City','State','Country']
  },
  {
    title:'Payment Method',
    description:'Add a payment method to your Nutanix Account to get started connecting to {Service}.<br><br>By continuing, you create a Nutanix Payments account <br> and agree to the <a>Terms of Service</a> and <a>Privacy Notice</a>',
    forms:['Card Number',"Card Holder's Name",'Exp. Date','CVV','Address','Zip Code','City','State','Country']
  }
]

$('container').append(`<div class='company-info' card fw></div>`);


//Forms
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


//Form main text
$('.company-info').prepend(
  `<div class='block-one' vss>
    <h2>2. Company Details</h2>
    <p alt>
      When you create a {Service} Account, we ask for some personal information. This info helps keep your account secure and makes our services more useful.
    </p>
  </div>
`
)


//checkout modules

let review =[
  {
  name:'Payment Plan',
  description:'Single Payment Annual Plan',
  action:'<button secondary>Edit</button>'
  },

  {
  name:'Company Details',
  description:'Nutanix <br>1740 Technology Dr #150, San Jose, CA 95110',
  action:'<button secondary>Edit</button>'
  },

  {
  name:'Payment Method',
  description:'Master Card <br> Ending in 3498',
  action:'<button secondary>Edit</button>'
  },
  {
  name:'Automatic Renewal',
  description:'Your plan will automatically renew on 12 December 2020',
  action:'<button secondary>Off</button>'
  },

]

/////////////////////////////////////////////


//Checkout block
let summary = ['Annual Plan','$45000']
let summary2 = ['Subtotal','$45000']
let summary3 = ['Total','$45000']


$('container').append(`<div class='checkout-holder' fw hsd></div>`)

$('.checkout-holder').append(`
  <div card class='block-one sixty' vss>
    <h2 fw> 3. Review and Confirm </h2>
    <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses & pick a payment plan to continue</p>
  </div>
`)

$('.sixty').append(review.map(value => `
    <div class='review-group' fw hcd>
      <section>
        <h3>${value.name}</h3>
        <p alt> ${value.description}</p>
      </section>
      ${value.action}
    </div>
  `)
)


//confirmation purple  box

$('.checkout-holder').append(`
  <div card class='checkout'fw>
    <h2 fw>Order Summary</h2>
    <div hcd>
      ${summary.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <div hcd>
      ${summary2.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <div hcd>
      ${summary3.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <br>
  </div>
`)

$('.checkout').append(`
  <div class='confirmation'>
    <div class='dark'>
      <label> Promotional code </label>
      <input type='text' class='dark'></input>
    </div>
    <button secondary fw>Complete purchase</button>
  </div>`
);
