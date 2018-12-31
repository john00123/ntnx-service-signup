
$('container').append(`
  <br>
  <div card fw hcd class='price-card'>
    <div class='price-component' vcs>
    <h2 fw> 1. Input your monthly cloud cost </h2>

    <p alt> Beam suscruptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses & pick a payment plan to continue</p>
      <label style='padding:5px 0'> Monthly cloud cost</label>
      <div fw class='inputs'>
        <input class='calc0' type='text' value='100'/>
        <div class='block-hover' vc><input id="price" type="range" name="points"  step="1" min="100000" max="400000"></div>
      </div>
    </div>

    <div>
    <div class='logos' fw hcs style='justify-content: flex-start; flex-wrap:wrap; padding:20px 0; width:420px'>
      <img logo width="32" height="32" src='img/azure.svg'/>
      <img logo width="32" height="32" src='img/g.svg'/>
      <img logo width="32" height="32" src='img/nutanix.svg'/>
      <img logo width="32" height="32" src='img/aws.svg'/>
      <img logo width="32" height="32" src='img/g.svg'/>
      <img logo width="32" height="32" src='img/g.svg'/>
      <img logo width="32" height="32" src='img/aws.svg'/>
      <img logo width="32" height="32" src='img/g.svg'/>
    </div>
    </div>
  </div>

  `)

  $('#price').on('input', function(){
    price = this.value;
    console.log(price);
    data.map( value=>$('.calc').text(`$${Math.round(price * value.percentage)}.00`));
    data.map( value=>$('.calc2').text(`$${Math.round(price * value.percentage * 12)}.00`));
    data.map( value=>$('.calc0').val(Math.round(price)));
  })


  ///
  
