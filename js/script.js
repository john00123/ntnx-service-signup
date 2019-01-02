
<<<<<<< HEAD

$('container').append(
  `<div card fw hsd>
    <div class='block-one' vss>
      <h2> 1. Select your plan </h2>

      <p alt>Easily create enterprise-grade virtual workspaces for your teams, customers, or partners.<br></p> <p>Prices do not include infrastructure, you must bring your own IaaS account.
      For custom quotes using Nutanix Frame infrastructure, usage (compute) is charged at $0.01 per credit for all plans.
      See <a>credit consumption rates.<a/></p><br>

    </div>

    <img logo height=300px src='img/bg.png'/>
   </div>
  `
)


//input operations
$('.calc0').on('input', function(){
  price = parseFloat(this.value);

  //month calc
  data.map(value=>
    $('.calc').text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc)) }.00`
    )
  );

  //year calc
  data.map( value=>
    $('.calc2').text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc*12))}.00`
    )
  );

})

// $('container').append(
//   `<div card fw hsd>
//     <div class='block-one' vss>
//       <h2> 1. Input your commitment ammount </h2>
//
//       <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
//
//       <div class='input-currency'>
//         <label> Estimated Commitment (Min. $5000.00)</label>
//         <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
//       </div>
//     </div>
//
//     <img logo height=300px src='img/bg.png'/>
//    </div>
//   `
// )
//
//
// //input operations
// $('.calc0').on('input', function(){
//   price = parseFloat(this.value);
//
//   //month calc
//   data.map(value=>
//     $('.calc').text(`$ ${new Intl.NumberFormat().format(
//       Math.round(price * value.perc)) }.00`
//     )
//   );
//
//   //year calc
//   data.map( value=>
//     $('.calc2').text(`$ ${new Intl.NumberFormat().format(
//       Math.round(price * value.perc*12))}.00`
//     )
//   );
//
// })
// $('container').append(
//   `<div card fw hsd>
//     <div class='block-one' vss>
//       <h2> 1. Input your commitment ammount </h2>
//
//       <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
//
//       <div class='input-currency'>
//         <label> Estimated Commitment (Min. $5000.00)</label>
//         <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
//       </div>
//     </div>
//
//     <img logo height=300px src='img/bg.png'/>
//    </div>
//   `
// )
//

//input operations
||||||| c80237f... added right order
// $('container').append(
//   `<div card fw hsd>
//     <div class='block-one' vss>
//       <h2> 1. Input your commitment ammount </h2>
//
//       <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>
//
//       <div class='input-currency'>
//         <label> Estimated Commitment (Min. $5000.00)</label>
//         <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
//       </div>
//     </div>
//
//     <img logo height=300px src='img/bg.png'/>
//    </div>
//   `
// )
//
//
// //input operations
// $('.calc0').on('input', function(){
//   price = parseFloat(this.value);
//
//   //month calc
//   data.map(value=>
//     $('.calc').text(`$ ${new Intl.NumberFormat().format(
//       Math.round(price * value.perc)) }.00`
//     )
//   );
//
//   //year calc
//   data.map( value=>
//     $('.calc2').text(`$ ${new Intl.NumberFormat().format(
//       Math.round(price * value.perc*12))}.00`
//     )
//   );
//
// })
=======
$('container').append(
  `<div card fw hsd>
    <div class='block-one' vss>
      <h2> 1. Input your commitment ammount </h2>

      <p alt>A commitment ammount will help us calculate the estimated cost of using Leap. A larger commitment value the higher savings you will get.<br></p> <p> To know how we calculate our costs, <a>use our online calculator</a></p><br>

      <div class='input-currency'>
        <label> Estimated Commitment (Min. $5000.00)</label>
        <input class='calc0' pattern="[0-9]*" type='text' placeholder='min. 5,000'/>
      </div>
    </div>

    <img logo height=300px src='img/bg.png'/>
   </div>
  `
)


//input operations
$('.calc0').on('input', function(){
  price = parseFloat(this.value);

  //month calc
  data.map(value=>
    $('.calc').text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc)) }.00`
    )
  );

  //year calc
  data.map( value=>
    $('.calc2').text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc*12))}.00`
    )
  );

})
>>>>>>> parent of c80237f... added right order
