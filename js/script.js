
$('container').append(
  `<div card fw hsd>
    <div class='block-one' vss>
      <h2> 1. Choose Number of Collectors </h2>

      <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses.</p><p style='margin: 0 0 20px 0'>If your needo more than 400 collectors.<br><a>Contact our sales team</a> </p>

      <div class='input-currency'>
        <label> Monthly cloud cost</label>
        <input class='calc0' type='range' />
      </div>
    </div>

      <div fw vc class='collector'>
        <h1>O</h1>
        <p alt style='text-align:center'>Collectors</p>
      </div>
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

  data.map(value=>
    $('.collector h1').text(` ${new Intl.NumberFormat().format(
      Math.round(price * value.perc)) }`
    )
  );

  //year calc
  data.map( value=>
    $('.calc2').text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc*12))}.00`
    )
  );

})
