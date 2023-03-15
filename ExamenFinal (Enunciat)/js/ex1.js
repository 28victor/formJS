document.addEventListener('DOMContentLoaded', () => 
{
    const signes = ["aries","taure","bessons","cancer","leo","virgo","lliura","escorpio","sagitari","capricorn","aquari","peixos"];
    let SigneInput = document.querySelector('#iSigne');
    let CodiSoci = document.querySelector('#iCodiSoci');
    let NumFills = document.querySelector('#iFills');
    let Consulta = document.querySelector('#iConsulta');
    let Boton = document.querySelector('#bConsulta');

    function styleInputValue(control,correct){
        if(correct){
            control.classList.remove('bad');
            control.classList.add('ok');
        }else{
            control.classList.remove('ok');
            control.classList.add('bad');
        }
    }
    
    function CheckSigne()
    {
        let res = false;

        for (let i = 0; i < signes.length; i++)
        {
            if(SigneInput.value == signes[i]) res = true;
        }
        return res;
    }

    function CheckCodi()
    {
        let res = false;

        if (CodiSoci.value.length == 8 && /[a-z]+[0-9]+[a-z]/.test(CodiSoci.value)) res = true;

        return res;
    }

    function CheckFills()
    {
        let res = false;

        if (NumFills.value <= 10 && NumFills.value > 0) res = true;

        return res;
    }

    function CheckConsulta()
    {
        let res = false;

        if (Consulta.value.length >= 15) res = true;

        return res;
    }


    function HabilitarSubmit()
    {
        let signeCheck = CheckSigne();
        let codiCheck = CheckCodi();
        let fillsCheck = CheckFills();
        let consultaCheck = CheckConsulta();

        
        if (this === SigneInput) styleInputValue(this,signeCheck);
        else if (this === CodiSoci) styleInputValue(this,codiCheck);
        else if (this === NumFills) styleInputValue(this,fillsCheck);
        else styleInputValue(this,consultaCheck);

        if (signeCheck && codiCheck && fillsCheck && consultaCheck)
        {
            Boton.disabled=false;
        }
        else
        {
            Boton.disabled=true;
        }

    }

    SigneInput.addEventListener('change',HabilitarSubmit);
    CodiSoci.addEventListener('keyup',HabilitarSubmit);
    NumFills.addEventListener('change',HabilitarSubmit);
    Consulta.addEventListener('keyup',HabilitarSubmit);

},false);
